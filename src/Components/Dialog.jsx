import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  useMediaQuery,
  useTheme,
  DialogTitle as MuiDialogTitle
} from '@mui/material';
import { CloseIcon } from '__ASSETS__/SVG';
import IconButton from './IconButton';

const styles = {
  root: {
    display: 'flex',
    borderBottom: `1px solid`,
    borderBottomColor: 'common.black',
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
    color: 'primary.main'
  }
};

// const styles = makeStyles(theme => ({
//   paperRoot: {
//     minWidth: 600,
//     [theme.breakpoints.down('xs')]: {
//       minWidth: '100vw'
//     }
//   }
// }));

const DialogTitleCustom = props => {
  const { children, onClose, closeButton } = props;
  return (
    <MuiDialogTitle disableTypography sx={styles.root}>
      <Typography sx={styles.title} variant="h6">
        {children}
      </Typography>
      {closeButton && onClose && (
        <IconButton sx={styles.closeButton} id="dialog-close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </MuiDialogTitle>
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
    sx,
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
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
      fullScreen={fullScreen || smallFullScreen}
      open={open || stateOpen}
      onClose={open ? onClose : handleClose}
      aria-labelledby="responsive-dialog-title"
      // PaperProps={{
      //   sx: {
      //     root: sx.paperRoot
      //   }
      // }}
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
  onClose: PropTypes.func.isRequired,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};
DialogJK.defaultProps = {
  buttons: null,
  closeButton: false,
  fullScreen: false,
  open: false,
  sx: {}
};

DialogTitleCustom.propTypes = {
  children: PropTypes.node.isRequired,
  closeButton: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
DialogTitleCustom.defaultProps = {};

export default DialogJK;
