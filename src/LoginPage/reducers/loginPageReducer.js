import { createReducer } from "../../Global/redux";
import { COUNT } from "../_helpers/constants";
const defaultState = {
  count: 0,
  setCount: null
};

const loginPageReducer = {
  [COUNT]: (state, action) => ({
    ...state,
    count: state.count + 1,
    id: action.id
  })
};

export default createReducer(defaultState, loginPageReducer);
