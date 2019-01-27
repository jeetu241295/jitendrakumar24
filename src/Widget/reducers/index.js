import { combineReducers } from "redux";
import loginPageReducer from "./loginPageReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  loginPageReducer,
  form: formReducer
});
