import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import classNames from 'classnames';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { CloseIcon } from '../Global/SVG';
import IconButton from './IconButton';

const styles1 = makeStyles(theme => ({
  success: {
    backgroundColor: theme.colors.mainAction
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const MySnackbarContent = props => {
  const { className, message, onClose, ...other } = props;
  const classes = styles1();
  return (
    <SnackbarContent
      className={classNames(classes.success, className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          {message}
        </span>
      }
      action={[
        <IconButton key="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
};

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func
};

const MySnackbarContentWrapper = MySnackbarContent;

const SimpleSnackbar = props => {
  const [open, setOpen] = useState(false);

  useEffect(
    newProps => {
      if (newProps.open !== null) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    },
    [{ open }]
  );

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const { message } = props;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <MySnackbarContentWrapper onClose={handleClose} message={message} />
    </Snackbar>
  );
};

SimpleSnackbar.propTypes = {
  message: PropTypes.string.isRequired
};

export default SimpleSnackbar;
