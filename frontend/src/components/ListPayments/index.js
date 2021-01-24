import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import moment from "moment";
import _get from "lodash/get";

import paymentsActions from "@/store/payments/actions";
import { useDebounce } from "@/hooks/useDebounce";

import { Input, Table } from "antd";
import Card from "@/components/ui/Card";

import classes from "./listPayments.modules.scss";

const ListPayments = () => {
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState("");
  const [filtersTable, setFiltersTable] = useState();

  const { origin } = useSelector((state) => state.Payments);

  const debounceValue = useDebounce(valueInput, 1000);

  useEffect(() => {
    if (debounceValue) {
      dispatch(paymentsActions.search({ value: debounceValue }));
    }
    if (!valueInput) {
      dispatch(paymentsActions.get());
    }
  }, [debounceValue, valueInput]);

  const originData = useMemo(
    () =>
      origin.map((item, index) => ({
        key: index,
        ...item,
      })),
    [origin]
  );

  const handleTableChange = useCallback((_, filters) => {
    setFiltersTable(filters);
  }, []);

  const onOriginItem = useCallback((data) => {
    dispatch(paymentsActions.setOriginItem(data));
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: (a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      },
      render: (_, row) => {
        return (
          <Link to={`/payment/${row.id}`} onClick={() => onOriginItem(row)}>
            {row.id}
          </Link>
        );
      },
    },
    {
      title: "Наименование",
      dataIndex: "name",
      sorter: (a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      },
    },
    {
      title: "Описание",
      dataIndex: "description",
      sorter: (a, b) => {
        if (a.description < b.description) return -1;
        if (a.description > b.description) return 1;
        return 0;
      },
    },

    {
      title: "Статус",
      dataIndex: "status",
      sorter: (a, b) => {
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
      },
      filters: origin.map((item) => ({
        text: item.status,
        value: item.status,
      })),
      filteredValue: _get(filtersTable, "status", null),
      onFilter: (value, record) => record.status.includes(value),
    },
    {
      title: "Сумма",
      dataIndex: "sum",
      sorter: (a, b) => {
        if (a.sum < b.sum) return -1;
        if (a.sum > b.sum) return 1;
        return 0;
      },
    },
    {
      title: "Реквизиты",
      dataIndex: "recipientDetails",
      sorter: (a, b) => {
        if (a.recipientDetails < b.recipientDetails) return -1;
        if (a.recipientDetails > b.recipientDetails) return 1;
        return 0;
      },
    },
    {
      title: "Дата создания",
      dataIndex: "createdAt",
      sorter: (a, b) => {
        if (a.createdAt < b.createdAt) return -1;
        if (a.createdAt > b.createdAt) return 1;
        return 0;
      },
      render: (_, row) => {
        return moment(row.createdAt).format("MMMM Do YYYY");
      },
    },
  ];

  return (
    <div className={classes.list}>
      <Card>
        <div className={classes.list__search}>
          <Input.Search
            placeholder="Мульти поиск"
            onChange={({ target: { value } }) => setValueInput(value)}
          />
        </div>
      </Card>

      <div className={classes.list__table}>
        <Card>
          <Table
            columns={columns}
            dataSource={originData}
            pagination={false}
            onChange={handleTableChange}
          />
        </Card>
      </div>
    </div>
  );
};

export default ListPayments;
