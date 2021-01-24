import { all, put, takeEvery } from "redux-saga/effects";
import backend from "@/core/api";

import actions from "./actions";
import types from "./constants";

const USERS_NAME = "users";

function* auth(action) {
  try {
    const { email, password } = action.payload;
    const user = yield backend.service(USERS_NAME).find({
      query: {
        $select: ["id", "email", "amountMoney", "createdAt", "updatedAt"],
        email,
        password,
      },
    });

    if (!!user.data) {
      yield put(actions.authSuccess(user.data["0"]));
    }
  } catch (err) {
    console.log(err);
    yield put(actions.authFailure(user.data));
  }
}

export default function* accountSagas() {
  yield all([takeEvery(types.AUTH, auth)]);
}
