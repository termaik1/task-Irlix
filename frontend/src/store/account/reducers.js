import types from "./constants";

const initialState = {
  data: null,
};

const AccountReducers = {
  [types.AUTH_SUCCESS]: (state, action) => ({
    ...state,
    data: action.payload,
  }),
  [types.LOGOUT]: (state, action) => ({
    ...state,
    data: null,
  }),
};

const Account = (state = initialState, action) => {
  const reducers = AccountReducers[action.type];

  if (!reducers) {
    return state;
  }
  return reducers(state, action);
};

export default Account;
