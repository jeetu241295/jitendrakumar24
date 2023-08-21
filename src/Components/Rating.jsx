import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';

const styles = {
  rating: {
    margin: '0 1rem'
  }
};

const RatingJK = props => {
  const { value, sx, onChange, size, readOnly, name, ...others } = props;

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
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  readOnly: PropTypes.bool,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

RatingJK.defaultProps = {
  size: 'small',
  sx: {},
  readOnly: false,
  onChange: null
};

export default RatingJK;
