import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MuiTextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const styles = {
  textField: {
    '&:hover': {
      '& label': {
        color: 'colors.mainAction'
      }
    },
    '& label': {
      color: 'common.white',
      '&:hover': {
        color: 'colors.mainAction'
      }
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'common.white'
      },
      '&:hover': {
        '& fieldset': {
          borderColor: 'colors.mainAction'
        }
      }
    }
  }
};

function TextField(props) {
  const { required, name, label, rules, fullWidth, sx, helperText, ...rest } =
    props;

  const { validate, ...restRules } = rules;

  const {
    formState: { errors },
    control
  } = useFormContext();
  return (
    <Controller
      render={({ field }) => (
        <MuiTextField
          sx={[styles.textField, ...(Array.isArray(sx) ? sx : [sx])]}
          label={label}
          placeholder={label}
          error={!!errors[name]}
          helperText={errors[name]?.message || helperText}
          variant="outlined"
          autoComplete="off"
          size="small"
          fullWidth={fullWidth}
          {...field}
          {...rest}
        />
      )}
      name={name}
      defaultValue=""
      control={control}
      rules={{
        required: { value: required, message: 'Required' },
        validate,
        ...restRules
      }}
    />
  );
}

TextField.propTypes = {
  required: PropTypes.bool,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  rules: PropTypes.object,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  name: PropTypes.string.isRequired,
  label: PropTypes.string
};

TextField.defaultProps = {
  sx: {},
  label: '',
  rules: {},
  required: true,
  helperText: '',
  fullWidth: true
};

export default TextField;
