import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MUITextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { typeValidation } from './helpers';

const TextField = props => {
  const {
    required,
    name,
    id,
    type,
    label,
    rules,
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
            fullWidth={fullWidth}
            id={id}
            type={type}
            autoComplete="off"
            label={label}
            helperText={errors[name]?.message || helperText}
            error={!!error}
            required={required}
            size="small"
            variant="outlined"
            {...field}
            {...others}
          />
        );
      }}
      name={name}
      defaultValue=""
      control={control}
      rules={{
        required: { value: required, message: 'Required' },
        validate: allValidations,
        ...restRules
      }}
    />
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  InputProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  rules: PropTypes.object,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  helperText: PropTypes.string
};

TextField.defaultProps = {
  InputProps: {},
  fullWidth: true,
  required: false,
  rules: {},
  type: 'text',
  helperText: null
};
export default TextField;
