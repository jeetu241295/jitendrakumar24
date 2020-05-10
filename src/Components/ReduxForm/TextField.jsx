import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Field } from 'redux-form';

const styles = makeStyles(theme => ({
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
}));

const RenderTextField = ({
  label,
  input,
  meta: { touched, error },
  multiline,
  rows,
  ...custom
}) => {
  const classes = styles();
  return (
    <React.Fragment>
      <TextField
        label={label}
        placeholder={label}
        // eslint-disable-next-line no-unneeded-ternary
        error={touched && error ? true : false}
        helperText={touched && error}
        variant="outlined"
        multiline={multiline}
        rows={rows}
        fullWidth
        autoComplete="false"
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
};

const ReduxTextField = props => {
  const { name, label, className } = props;
  const classes = styles();
  return (
    <Grid className={(classes.textFieldWrap, className)}>
      <Field name={name} component={RenderTextField} label={label} {...props} />
    </Grid>
  );
};

ReduxTextField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string
};

ReduxTextField.defaultProps = {
  className: '',
  label: ''
};

RenderTextField.propTypes = {
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

export default ReduxTextField;
