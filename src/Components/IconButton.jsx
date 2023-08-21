import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';

const IconButtonJK = props => {
  const { children, sx, onClick, id, ...others } = props;

  return (
    <IconButton
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
      aria-label={`${id}`}
      disableFocusRipple
      onClick={onClick}
      {...others}
    >
      {children}
    </IconButton>
  );
};

IconButtonJK.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

IconButtonJK.defaultProps = {
  sx: {}
};

export default IconButtonJK;
