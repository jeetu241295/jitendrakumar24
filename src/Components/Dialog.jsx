import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { makeStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { CloseIcon } from '../Global/SVG';

const styles = makeStyles(() => ({
  modalWidth: {
    maxWidth: '750px'
  }
}));

const customTitleStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    borderBottom: `1px solid ${theme.colors.black}`,
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
    color: theme.colors.mainAction
  }
}));

const DialogTitleCustom = props => {
  const { children, onClose, closeButton } = props;
  const classes = customTitleStyles(props);
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography className={classes.title} variant="h6">
        {children}
      </Typography>
      {closeButton && onClose && (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
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
    children,
    title,
    open,
    onClose,
    closeButton
  } = props;
  const classes = styles(props);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open || stateOpen}
      onClose={open ? onClose : handleClose}
      aria-labelledby="responsive-dialog-title"
      classes={{
        paper: classes.modalWidth
      }}
    >
      <DialogTitleCustom
        id="responsive-dialog-title"
        onClose={onClose}
        closeButton={closeButton}
      >
        {title}
      </DialogTitleCustom>
      <DialogContent>
        <DialogContentText className={classes.content}>
          {children}
        </DialogContentText>
      </DialogContent>
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

export default withMobileDialog()(DialogJK);
