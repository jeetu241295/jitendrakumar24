import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';

const styles = {
  rating: {
    margin: '0 1rem'
  }
};

const RatingJK = props => {
  const { value, onChange, size, sx, readOnly, name, ...others } = props;

  return (
    <Rating
      name={name}
      sx={[styles.rating, ...(Array.isArray(sx) ? sx : [sx])]}
      value={value}
      onChange={onChange}
      size={size}
      readOnly={readOnly}
      {...others}
    />
  );
};

RatingJK.propTypes = {
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  readOnly: PropTypes.bool
};

RatingJK.defaultProps = {
  sx: {},
  size: 'small',
  readOnly: false,
  onChange: null
};

export default RatingJK;
