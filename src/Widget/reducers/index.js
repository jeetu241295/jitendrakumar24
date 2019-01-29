import { combineReducers } from "redux";
import personalWebsiteReducer from "./personalWebsiteReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  personalWebsiteReducer,
  form: formReducer
});
