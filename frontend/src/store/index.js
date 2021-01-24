import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import Account from "@/store/account/reducers";
import Payments from "@/store/payments/reducers";

import accountSagas from "@/store/account/sagas";
import paymentsSagas from "@/store/payments/sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const rootReducers = combineReducers({
  Account,
  Payments,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(accountSagas);
sagaMiddleware.run(paymentsSagas);

export default store;
