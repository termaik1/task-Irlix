import { all, put, takeEvery, select } from "redux-saga/effects";
import { push } from "react-router-redux";
import backend from "@/core/api";

import actions from "./actions";
import types from "./constants";

const PAYMENTS_NAME = "payments";

const getData = (state) => state.Account.data;

function* create(action) {
  try {
    const data = yield select(getData);
    const params = action.payload;
    const payments = yield backend.service(PAYMENTS_NAME).create({
      ...params,
      userId: data.id,
    });

    yield put(actions.createSuccess());
    yield put(push("/"));
  } catch (err) {
    console.log(err);
    yield put(actions.createFailure(user.data));
  }
}

function* get() {
  try {
    const data = yield select(getData);
    const payments = yield backend.service(PAYMENTS_NAME).find({
      query: {
        userId: data.id,
      },
    });

    if (payments.data) {
      yield put(actions.getSuccess(payments.data));
    }
  } catch (err) {
    console.log(err);
    yield put(actions.getFailure(payments.data));
  }
}

function* search(action) {
  try {
    const { value } = action.payload;
    const data = yield select(getData);
    const payments = yield backend.service(PAYMENTS_NAME).find({
      query: {
        userId: data.id,
        $or: [
          {
            name: {
              $iLike: `%${value}%`,
            },
          },
          {
            description: {
              $iLike: `%${value}%`,
            },
          },
          {
            status: {
              $iLike: `%${value}%`,
            },
          },
          {
            sum: {
              $iLike: `%${value}%`,
            },
          },
          {
            recipientDetails: {
              $iLike: `%${value}%`,
            },
          },
        ],
      },
    });

    yield put(actions.searchSuccess(payments.data));
  } catch (err) {
    console.log(err);
    yield put(actions.searchFailure(payments.data));
  }
}

export default function* accountSagas() {
  yield all([
    takeEvery(types.CREATE, create),
    takeEvery(types.GET, get),
    takeEvery(types.SEARCH, search),
  ]);
}
