import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import moment from "moment";
import * as Yup from "yup";
import { Formik } from "formik";
import _get from "lodash/get";

import paymentsActions from "@/store/payments/actions";

import Card from "@/components/ui/Card";
import InputForm from "@/components/ui/InputForm";

import classes from "./payment.modules.scss";

const Payment = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const [isReading, setIsReading] = useState(true);

  const { data } = useSelector((state) => state.Account);
  const { originItem } = useSelector((state) => state.Payments);

  useEffect(() => {
    if (location.pathname === "/create") {
      setIsReading(false);
    }
  }, []);

  const schemaYup = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[A-Za-z, А-Яа-я ]*$/,
        "Имя должно содержать не менее 4 символов и состоять только из букв"
      )
      .min(
        4,
        "Имя должно содержать не менее 4 символов и состоять только из букв"
      )
      .required("Обязательно к заполнению"),
    createAt: Yup.date().required("Обязательно к заполнению"),
    status: Yup.string().required("Обязательно к заполнению"),
    sum: Yup.number()
      .min(1, "Сумма не может быть равна или меньше чем 0")
      .max(data.amountMoney, "Баланс меньше чем оплата =(")
      .required("Обязательно к заполнению"),
    recipientDetails: Yup.string().required("Обязательно к заполнению"),
  });

  const onSubmit = useCallback((value) => {
    dispatch(paymentsActions.create(value));
    history.push("/list");
  }, []);

  return (
    <div className={classes.payment}>
      <Card>
        <div className={classes.payment__content}>
          <Formik
            initialValues={{
              name: _get(originItem, "name", ""),
              description: _get(originItem, "description", ""),
              createAt: _get(originItem, "createAt", new Date()),
              status: _get(originItem, "status", ""),
              sum: _get(originItem, "sum", ""),
              recipientDetails: _get(originItem, "recipientDetails", ""),
            }}
            validationSchema={schemaYup}
            onSubmit={onSubmit}
          >
            {({ values, touched, errors, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className={classes.payment__title}>
                  {isReading ? (
                    <>Код платежа: {_get(originItem, 'id', "Ошибка")}</>
                  ) : (
                    "Создание нового платежа"
                  )}
                </div>
                <InputForm
                  name="name"
                  labelName="Наименование*"
                  placeholder="Наименование"
                  isError={errors.name && touched.name}
                  errorName={errors.name}
                  value={values.name}
                  onChange={handleChange}
                  isDisabled={isReading}
                />
                <InputForm
                  name="description"
                  labelName="Описание"
                  placeholder="Описание"
                  isError={errors.description && touched.description}
                  errorName={errors.description}
                  value={values.description}
                  onChange={handleChange}
                  isDisabled={isReading}
                />
                <InputForm
                  name="createAt"
                  labelName="Дата создания*"
                  placeholder="Введите дату"
                  isError={errors.createAt && touched.createAt}
                  errorName={errors.createAt}
                  value={moment(values.createAt).format("MMMM Do YYYY")}
                  onChange={handleChange}
                  isDisabled={isReading}
                />
                <InputForm
                  name="status"
                  labelName="Статус*"
                  placeholder="Введите статус"
                  isError={errors.status && touched.status}
                  errorName={errors.status}
                  value={values.status}
                  onChange={handleChange}
                  isDisabled={isReading}
                />
                <InputForm
                  name="sum"
                  labelName="Сумма ₽*"
                  placeholder="Введите сумму ₽"
                  isError={errors.sum && touched.sum}
                  errorName={errors.sum}
                  value={values.sum}
                  onChange={handleChange}
                  isDisabled={isReading}
                />
                <InputForm
                  name="recipientDetails"
                  labelName="Реквизиты получателя*"
                  placeholder="Реквизиты получателя"
                  isError={errors.recipientDetails && touched.recipientDetails}
                  errorName={errors.recipientDetails}
                  value={values.recipientDetails}
                  onChange={handleChange}
                  isDisabled={isReading}
                />
                {!isReading && (
                  <button type="submit" className={classes.payment__btn}>
                    Создать
                  </button>
                )}
              </form>
            )}
          </Formik>
        </div>
      </Card>
    </div>
  );
};

export default Payment;
