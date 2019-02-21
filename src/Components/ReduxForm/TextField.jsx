import React from "react";
import PropTypes from "prop-types";
import { Grid, TextField, withStyles } from "@material-ui/core";
import { Field } from "redux-form";

const styles = theme => ({
  cssLabel: {
    color: theme.colors.white
  },
  notchedOutline: {
    borderColor: theme.colors.white + " !important"
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`
    }
  },
  cssFocused: {}
});

const renderTextField = ({
  classes,
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
    InputLabelProps={{
      classes: {
        root: classes.cssLabel
      }
    }}
    InputProps={{
      classes: {
        root: classes.cssOutlinedInput,
        focused: classes.cssFocused,
        notchedOutline: classes.notchedOutline
      }
    }}
  />
);

const ReduxTextField = props => {
  const { classes, name, label, className } = props;
  return (
    <Grid className={(classes.textFieldWrap, className)}>
      <Field name={name} component={renderTextField} label={label} {...props} />
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
