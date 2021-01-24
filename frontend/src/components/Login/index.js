import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import accountActions from "@/store/account/actions";

import { Button } from "antd";
import Card from "@/components/ui/Card";

import classes from "./login.modules.scss";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = useCallback(() => {
    if (email && password) {
      dispatch(accountActions.auth({ email, password }));
    }
  }, [email, password]);
  return (
    <div className={classes.login}>
      <div className={classes.login__container}>
        <Card>
          <div className={classes.login__content}>
            <input
              placeholder="Введите email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
            <input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
            <Button block onClick={onClick}>
              Войти
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
