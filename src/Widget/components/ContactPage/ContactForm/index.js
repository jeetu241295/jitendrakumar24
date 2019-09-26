import { reduxForm } from 'redux-form';
import ContactForm from './ContactForm';

const validate = values => {
  const errors = {};
  const emailRegex = /^[a-zA-Z0-9]+\.?_?[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,5}(\.[a-zA-Z]{2,5})?$/;
  const contactRegex = /^\d{3}-\d{3}-\d{4}$/;

  const requiredFiields = ['name', 'email', 'phone', 'subject'];

  if (!emailRegex.test(values.email)) errors.email = 'Enter valid Email';
  if (!contactRegex.test(values.phone))
    errors.phone = 'Enter valid mobile number';

  requiredFiields.forEach(item => {
    if (!values[item]) errors[item] = 'Required';
  });

  return errors;
};

export default reduxForm({
  form: 'contactForm',
  enableReinitialize: true,
  validate
})(ContactForm);
