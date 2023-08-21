import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio
} from '@mui/material';

const RadioField = props => {
  const {
    required,
    name,
    id,
    groupLabel,
    rules,
    options,
    row,
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
            size="small"
            required={required}
            error={!!errors[name]}
            component="fieldset"
          >
            {groupLabel && (
              <FormLabel component="legend">{groupLabel}</FormLabel>
            )}
            <RadioGroup id={id} row={row} {...field} {...others}>
              {options.map(item => (
                <FormControlLabel
                  disabled={item.disabled}
                  value={item.value}
                  key={item.label}
                  control={<Radio size="small" color="primary" />}
                  label={item.label}
                />
              ))}
            </RadioGroup>
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
      defaultValue={null}
      rules={{
        required: { value: required, message: 'Required' },
        ...rules
      }}
    />
  );
};

RadioField.propTypes = {
  id: PropTypes.string.isRequired,
  groupLabel: PropTypes.string,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  rules: PropTypes.object,
  row: PropTypes.bool,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  helperText: PropTypes.string
};

RadioField.defaultProps = {
  groupLabel: null,
  row: true,
  rules: {},
  required: false,
  helperText: null
};

export default RadioField;
