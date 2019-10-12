import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid, TextField, withStyles } from '@material-ui/core';
import { Field } from 'redux-form';

const styles = theme => ({
  cssLabel: {
    color: theme.colors.white
  },
  notchedOutline: {
    borderColor: theme.colors.white + ' !important'
  },
  cssOutlinedInput: {
    color: theme.colors.white,
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`
    }
  },
  cssFocused: {}
});

const RenderTextField = ({
  classes,
  label,
  input,
  meta: { touched, error },
  multiline,
  rows,
  ...custom
}) => (
  <React.Fragment>
    <TextField
      label={label}
      placeholder={label}
      error={touched && error}
      helperText={touched && error}
      variant="outlined"
      multiline={multiline}
      rows={rows}
      fullWidth
      autoComplete={false}
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
          notchedOutline: classNames({
            [classes.notchedOutline]: !(touched && error)
          })
        }
      }}
    />
    {/* {touched && error && <FormHelperText>{error}</FormHelperText>} */}
  </React.Fragment>
);

const ReduxTextField = props => {
  const { classes, name, label, className } = props;
  return (
    <Grid className={(classes.textFieldWrap, className)}>
      <Field name={name} component={RenderTextField} label={label} {...props} />
    </Grid>
  );
};

ReduxTextField.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string
};

ReduxTextField.defaultProps = {
  className: '',
  label: ''
};

RenderTextField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  rows: PropTypes.number,
  multiline: PropTypes.bool
};
RenderTextField.defaultProps = {
  rows: 1,
  multiline: false
};

export default withStyles(styles)(ReduxTextField);
