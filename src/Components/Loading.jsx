import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Backdrop } from '@mui/material';

const styles = {
  backdrop: {
    zIndex: 9999
  }
};

function Loading(props) {
  const { open } = props;

  return (
    <Backdrop sx={styles.backdrop} open={open}>
      <CircularProgress />
    </Backdrop>
  );
}

Loading.propTypes = {
  open: PropTypes.bool.isRequired
};
Loading.defaultProps = {};

export default Loading;
