import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Backdrop } from '@mui/material';

const styles = {
  backdrop: {
    zIndex: 9999
  }
};

const Loading = props => {
  const { open, sx } = props;
  return (
    <Backdrop
      sx={[styles.backdrop, ...(Array.isArray(sx) ? sx : [sx])]}
      open={open}
    >
      <CircularProgress />
    </Backdrop>
  );
};

Loading.propTypes = {
  open: PropTypes.bool.isRequired,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};
Loading.defaultProps = {
  sx: {}
};

export default Loading;
