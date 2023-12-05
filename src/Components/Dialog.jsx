import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogContent,
  useMediaQuery,
  DialogTitle,
  Typography,
  useTheme
} from '@mui/material';
import { CloseIcon } from '__ASSETS__/SVG';
import IconButton from './IconButton';

const styles = {
  paperRoot: {
    minWidth: { xs: '100vw', sm: 600 }
  },
  root: {
    display: 'flex',
    borderBottom: `1px solid ${'common.black'}`,
    marginBottom: '1rem',
    padding: '1rem'
  },
  closeButton: {
    marginLeft: 'auto',
    padding: '0.4rem'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 800,
    color: 'colors.mainAction'
  }
};

const DialogTitleCustom = props => {
  const { children, onClose, closeButton } = props;
  return (
    <DialogTitle disableTypography sx={styles.root}>
      <Typography sx={styles.title} variant="h6">
        {children}
      </Typography>
      {closeButton && onClose && (
        <IconButton sx={styles.closeButton} id="dialog-close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </DialogTitle>
  );
};

const DialogJK = props => {
  const [stateOpen, setStateOpen] = useState(false);

  const handleClose = () => {
    setStateOpen(false);
  };

  const {
    fullScreen,
    buttons,
    children,
    title,
    open,
    onClose,
    closeButton,
    ...others
  } = props;

  const theme = useTheme();
  const smallFullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Dialog
      fullScreen={fullScreen || smallFullScreen}
      open={open || stateOpen}
      onClose={open ? onClose : handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="xs"
      {...others}
    >
      <DialogTitleCustom
        id="responsive-dialog-title"
        onClose={onClose}
        closeButton={closeButton}
      >
        {title}
      </DialogTitleCustom>
      <DialogContent>{children}</DialogContent>
      <DialogActions>{buttons && buttons.map(item => item)}</DialogActions>
    </Dialog>
  );
};

DialogJK.propTypes = {
  fullScreen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  closeButton: PropTypes.bool,
  buttons: PropTypes.node,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};
DialogJK.defaultProps = {
  buttons: null,
  closeButton: false,
  fullScreen: false,
  open: false
};

DialogTitleCustom.propTypes = {
  children: PropTypes.node.isRequired,
  closeButton: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
DialogTitleCustom.defaultProps = {};

export default DialogJK;
