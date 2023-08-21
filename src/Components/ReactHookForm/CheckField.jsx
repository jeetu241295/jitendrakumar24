import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText
} from '@mui/material';

const CheckField = props => {
  const {
    required,
    name,
    id,
    label,
    rules,
    disabled,
    onChange,
    helperText,
    ...others
  } = props;
  const {
    formState: { errors },
    control
  } = useFormContext();

  return (
    <Controller
      render={({ field }) => {
        return (
          <FormControl
            fullWidth
            variant="outlined"
            error={!!errors[name]}
            size="small"
            required={required}
          >
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  id={id}
                  color="primary"
                  onChange={(e, data) => {
                    field.onChange(e, data);
                    if (onChange) onChange(e, data);
                  }}
                  checked={Boolean(field.value)}
                  {...others}
                />
              }
              disabled={disabled}
              label={label}
            />
            {(errors[name] || helperText) && (
              <FormHelperText error={Boolean(errors[name])}>
                {errors[name] ? errors[name].message : helperText}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
      name={name}
      control={control}
      defaultValue={false}
      rules={{
        required: { value: required, message: 'Required' },
        ...rules
      }}
    />
  );
};

CheckField.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  rules: PropTypes.object,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  helperText: PropTypes.string
};

CheckField.defaultProps = {
  disabled: false,
  label: null,
  onChange: null,
  rules: {},
  required: false,
  helperText: null
};

export default CheckField;
