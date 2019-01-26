import { reduxForm } from "redux-form";
import LoginSection from "./LoginSection";

export default reduxForm({
  form: "loginForm",
  enableReinitialize: true
})(LoginSection);
