import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller, useFormContext } from 'react-hook-form';
import { DATE_FORMAT } from '__GLOBAL__/constants';

const DateField = props => {
  const {
    required,
    name,
    id,
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

  return (
    <Controller
      render={({ field: { ref, ...fieldRest } }) => {
        return (
          <DatePicker
            format={DATE_FORMAT}
            label={label}
            formatDensity="dense"
            slotProps={{
              textField: {
                required,
                fullWidth,
                size: 'small',
                variant: 'outlined',
                helperText: errors[name]?.message || helperText,
                error: !!errors[name]
              }
            }}
            {...fieldRest}
            {...others}
          />
        );
      }}
      name={name}
      defaultValue={null}
      control={control}
      rules={{
        required: { value: required, message: 'Required' },
        ...rules
      }}
    />
  );
};

DateField.propTypes = {
  id: PropTypes.string.isRequired,
  InputProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  rules: PropTypes.object,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  helperText: PropTypes.string
};

DateField.defaultProps = {
  InputProps: {},
  required: false,
  fullWidth: true,
  rules: {},
  helperText: null
};
export default DateField;
