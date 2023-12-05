import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const VerticalMenu = props => {
  const { sx, ...rest } = props;
  return (
    <SvgIcon
      sx={[styles.icon, ...(Array.isArray(sx) ? sx : [sx])]}
      viewBox="0 0 24 24"
      fontSize="small"
      {...rest}
    >
      <g>
        <g>
          <g>
            <circle cx="12" cy="4" r="2.5" />
            <circle cx="12" cy="12" r="2.5" />
            <circle cx="12" cy="20" r="2.5" />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
};

VerticalMenu.propTypes = {
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};
VerticalMenu.defaultProps = { sx: {} };

export default VerticalMenu;
