import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { Select, FormControl, InputLabel, FormHelperText } from '@mui/material';

const SelectField = props => {
  const {
    required,
    name,
    id,
    label,
    defaultValue,
    rules,
    showSelect,
    onChange,
    helperText,
    options,
    ...others
  } = props;
  const {
    formState: { errors },
    control
  } = useFormContext();
  const { validate, ...restRules } = rules;

  const allValidations = {
    ...validate
  };
  if (required)
    allValidations.required = value => value !== 'Select' || 'Required';
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
          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            error={!!error}
            required={required}
          >
            {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
            <Select
              {...field}
              native
              label={label}
              id={id}
              name={name}
              onChange={e => {
                field.onChange(e);
                if (onChange) onChange(e);
              }}
              {...others}
            >
              {showSelect && <option value="Select">Select</option>}
              {options.map(item => {
                if (item && typeof item === 'string')
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                return (
                  item && (
                    <option key={item.id} value={item.id}>
                      {item.value}
                    </option>
                  )
                );
              })}
            </Select>
            {(errors[name] || helperText) && (
              <FormHelperText error={Boolean(errors[name])}>
                {errors[name] ? errors[name].message : helperText}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={{
        required: { value: required, message: 'Required' },
        validate: allValidations,
        ...restRules
      }}
    />
  );
};

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  rules: PropTypes.object,
  register: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  name: PropTypes.string.isRequired,
  showSelect: PropTypes.bool
};

SelectField.defaultProps = {
  rules: {},
  required: false,
  showSelect: true,
  onChange: null,
  helperText: null,
  defaultValue: 'Select'
};

export default SelectField;
