import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MUITextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { typeValidation } from './helpers';

const NumberedTextField = props => {
  const {
    required,
    name,
    id,
    type,
    label,
    rules,
    onChange,
    InputProps,
    fullWidth,
    helperText,
    ...others
  } = props;

  const {
    formState: { errors },
    control
  } = useFormContext();
  const { validate, ...restRules } = rules;
  const allValidations = { ...typeValidation(type), ...validate };
  let error;
  if (name.includes('.')) {
    const splits = name.split('.');
    error = errors;
    splits.forEach(item => (error = error && error[item]));
  } else error = errors[name];

  return (
    <Controller
      render={({ field }) => {
        return (
          <MUITextField
            {...field}
            fullWidth={fullWidth}
            type="number"
            id={id}
            autoComplete="off"
            label={label}
            helperText={errors[name]?.message || helperText}
            error={!!error}
            required={required}
            size="small"
            onChange={e => {
              field.onChange(e);
              if (onChange) onChange(e);
            }}
            inputProps={{
              min: '0'
            }}
            onKeyDown={e =>
              ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
            }
            variant="outlined"
            {...others}
          />
        );
      }}
      name={name}
      defaultValue=""
      control={control}
      rules={{
        required: { value: required, message: 'Required' },
        min: 0,
        valueAsNumber: true,
        validate: allValidations,
        ...restRules
      }}
    />
  );
};

NumberedTextField.propTypes = {
  id: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  InputProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  rules: PropTypes.object,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  helperText: PropTypes.string
};

NumberedTextField.defaultProps = {
  InputProps: {},
  fullWidth: true,
  onChange: null,
  required: false,
  rules: {},
  helperText: null
};
export default NumberedTextField;
