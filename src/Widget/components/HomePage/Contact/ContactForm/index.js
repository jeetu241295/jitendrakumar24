import { reduxForm } from "redux-form";
import ContactForm from "./ContactForm";

export default reduxForm({
  form: "contactForm",
  enableReinitialize: true
})(ContactForm);
