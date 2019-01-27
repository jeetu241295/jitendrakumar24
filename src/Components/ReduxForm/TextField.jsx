import React from "react";
import PropTypes from "prop-types";
import { Grid, TextField, withStyles } from "@material-ui/core";
import { Field } from "redux-form";

const styles = theme => ({
  textFieldWrap: {}
});

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  multiline,
  rows,
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    variant="outlined"
    multiline={multiline}
    rows={rows}
    fullWidth
    {...input}
    {...custom}
  />
);

const ReduxTextField = props => {
  const { classes, name, label, className } = props;
  return (
    <Grid className={(classes.textFieldWrap, className)}>
      <Field name={name} component={renderTextField} label={label} {...props} />
      {/* {touched && error && <FormHelperText>{touched && error}</FormHelperText>} */}
    </Grid>
  );
};

ReduxTextField.propTypes = {
  classes: PropTypes.object.isRequired
};

ReduxTextField.defaultProps = {
  rows: 1,
  multiline: false
};

export default withStyles(styles)(ReduxTextField);
