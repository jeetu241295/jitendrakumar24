import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';

const AutoCompleteField = props => {
  const {
    required,
    name,
    id,
    label,
    rules,
    options,
    helperText,
    componentsPopperProps,
    ...others
  } = props;
  const {
    formState: { errors },
    control
  } = useFormContext();
  return (
    <Controller
      render={({ field: { onChange, ...field } }) => {
        return (
          <Autocomplete
            disablePortal
            id={id}
            options={options}
            size="small"
            componentsProps={{
              popper: componentsPopperProps
            }}
            onChange={(a, b) => onChange(b)}
            {...field}
            renderInput={params => (
              <TextField
                {...params}
                fullWidth
                id={id}
                label={label}
                variant="outlined"
                autoComplete="off"
                helperText={errors[name]?.message || helperText}
                error={!!errors[name]}
                required={required}
                size="small"
              />
            )}
            {...others}
          />
        );
      }}
      name={name}
      control={control}
      rules={{
        required: { value: required, message: 'Required' },
        ...rules
      }}
    />
  );
};

AutoCompleteField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  rules: PropTypes.object,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  componentsPopperProps: PropTypes.object
};

AutoCompleteField.defaultProps = {
  label: null,
  rules: {},
  required: false,
  helperText: null,
  componentsPopperProps: {}
};

export default AutoCompleteField;
