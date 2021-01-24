import types from "./constants";

const initialState = {
  originItem: null,
  origin: [],
};

const PaymentsReducers = {
  [types.SEARCH_SUCCESS]: (state, action) => ({
    ...state,
    origin: action.payload,
  }),
  [types.GET_SUCCESS]: (state, action) => ({
    ...state,
    origin: [...action.payload],
  }),
  [types.SEARCH_SUCCESS]: (state, action) => ({
    ...state,
    origin: [...action.payload],
  }),
  [types.SET_ORIGIN_ITEM]: (state, action) => ({
    ...state,
    originItem: action.payload,
  }),
};

const Payments = (state = initialState, action) => {
  const reducers = PaymentsReducers[action.type];

  if (!reducers) {
    return state;
  }
  return reducers(state, action);
};

export default Payments;
