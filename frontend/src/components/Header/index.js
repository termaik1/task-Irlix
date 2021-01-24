import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "antd";

import accountActions from "@/store/account/actions";
import paymentsActions from "@/store/payments/actions";

import classes from "./header.modules.scss";

const linkText = [
  {
    to: "/list",
    text: "Список платежей",
  },
  {
    to: "/create",
    text: "Создание платежа",
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const {
    data: { amountMoney },
  } = useSelector((state) => state.Account);

  const onLogout = useCallback(() => dispatch(accountActions.logout()), []);

  const onClick = useCallback(
    () => dispatch(paymentsActions.setOriginItem(null)),
    []
  );

  return (
    <div className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.header__money}>Баланс: {amountMoney} ₽</div>

        {linkText.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={classes.header__link}
            onClick={onClick}
          >
            {item.text}
          </Link>
        ))}
        <div className={classes.header__logout}>
          <Button block onClick={onLogout}>
            Выйти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
