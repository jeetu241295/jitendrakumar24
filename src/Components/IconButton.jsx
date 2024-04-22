import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';

function IconButtonJK(props) {
  const { children, onClick, id, sx, ...others } = props;
  return (
    <IconButton
      aria-label={id}
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
      disableFocusRipple
      disableTouchRipple
      disableRipple
      onClick={onClick}
      {...others}
    >
      {children}
    </IconButton>
  );
}

IconButtonJK.propTypes = {
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

IconButtonJK.defaultProps = {
  sx: {}
};

export default IconButtonJK;
