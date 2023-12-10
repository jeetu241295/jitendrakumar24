import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const Send = props => {
  const { sx, ...rest } = props;
  return (
    <SvgIcon
      sx={[styles.icon, ...(Array.isArray(sx) ? sx : [sx])]}
      fontSize="small"
      {...rest}
    >
      <path d="M0 0l20 10-20 10v-20zM0 8v4l10-2-10-2z" />
    </SvgIcon>
  );
};

Send.propTypes = {
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};
Send.defaultProps = { sx: {} };

export default Send;
