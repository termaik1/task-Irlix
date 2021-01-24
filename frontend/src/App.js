import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Payment from "@/components/Payment";

import Login from "@/components/Login";
import Header from "@/components/Header";
import ListPayments from "@/components/ListPayments";
import classes from "./app.modules.scss";

const App = () => {
  const history = useHistory();

  const { data } = useSelector((state) => state.Account);

  useEffect(() => {
    if (data) {
      history.push("/list");
    } else {
      history.push("/");
    }
  }, [data]);

  return (
    <div className={classes.app}>
      {data && <Header />}
      <div className={classes.app__container}>
        <Switch>
          <Route exact path="/create" component={Payment} />
          <Route exact path="/payment/:id" component={Payment} />
          <Route exact path="/list" component={ListPayments} />

          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
