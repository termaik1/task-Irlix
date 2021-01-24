import types from "./constants";

const actions = {
  create: (data) => ({
    type: types.CREATE,
    payload: data,
  }),
  createSuccess: () => ({
    type: types.CREATE_SUCCESS,
  }),
  createFailure: () => ({
    type: types.CREATE_FAILURE,
  }),
  get: () => ({
    type: types.GET,
  }),
  getSuccess: (data) => ({
    type: types.GET_SUCCESS,
    payload: data,
  }),
  getFailure: () => ({
    type: types.GET_FALURE,
  }),
  getId: (paymentId) => ({
    type: types.GET_ID,
    payload: {
      paymentId,
    },
  }),
  getIdSuccess: (data) => ({
    type: types.GET_ID_SUCCESS,
    payload: data,
  }),
  getIdFailure: () => ({
    type: types.GET_ID_FALURE,
  }),
  search: (data) => ({
    type: types.SEARCH,
    payload: data,
  }),
  searchSuccess: (data) => ({
    type: types.SEARCH_SUCCESS,
    payload: data,
  }),
  searchFailure: () => ({
    type: types.SEARCH_FALURE,
  }),
  setOriginItem: (data) => ({
    type: types.SET_ORIGIN_ITEM,
    payload: data,
  }),
};

export default actions;
