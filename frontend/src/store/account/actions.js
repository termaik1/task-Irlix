import types from "./constants";

const actions = {
  auth: (data) => ({
    type: types.AUTH,
    payload: data,
  }),
  authSuccess: (data) => ({
    type: types.AUTH_SUCCESS,
    payload: data,
  }),
  authFailure: () => ({
    type: types.AUTH_FAILURE,
  }),
  logout: () => ({
    type: types.LOGOUT
  })
};

export default actions;
