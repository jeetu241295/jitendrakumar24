import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const Phone = props => {
  const { sx, ...rest } = props;
  return (
    <SvgIcon
      sx={[styles.icon, ...(Array.isArray(sx) ? sx : [sx])]}
      viewBox="0 0 32 32"
      fontSize="small"
      {...rest}
    >
      <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z" />
    </SvgIcon>
  );
};

Phone.propTypes = {
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};
Phone.defaultProps = { sx: {} };

export default Phone;
