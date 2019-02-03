import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { withStyles } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = () => ({
  modalWidth: {
    maxWidth: "750px"
  }
});

const DialogTitleCustom = withStyles(theme => ({
  root: {
    display: "flex",
    borderBottom: `1px solid ${theme.colors.black}`,
    marginBottom: "1rem",
    padding: "1rem"
  },
  closeButton: {
    marginLeft: "auto",
    padding: "0.4rem"
  },
  title: {
    fontSize: "2rem",
    fontWeight: 800,
    color: theme.colors.mainAction
  }
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography className={classes.title} variant="h6">
        {children}
      </Typography>
      {onClose && (
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
});

class DialogJK extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      fullScreen,
      buttons,
      children,
      title,
      open,
      onClose,
      closeButton,
      classes
    } = this.props;

    return (
      <Dialog
        fullScreen={fullScreen}
        open={open ? open : this.state.open}
        onClose={open ? onClose : this.handleClose}
        aria-labelledby="responsive-dialog-title"
        classes={{
          paper: classes.modalWidth
        }}
      >
        {closeButton ? (
          <DialogTitleCustom id="responsive-dialog-title" onClose={onClose}>
            {title}
          </DialogTitleCustom>
        ) : (
          <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        )}
        <DialogContent>
          <DialogContentText className={classes.content}>
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>{buttons && buttons.map(item => item)}</DialogActions>
      </Dialog>
    );
  }
}

DialogJK.propTypes = {
  fullScreen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  closeButton: PropTypes.bool,
  buttons: PropTypes.node,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool
};
DialogJK.defaultProps = {
  buttons: null,
  closeButton: false,
  fullScreen: false,
  open: false
};

export default withStyles(styles)(withMobileDialog()(DialogJK));
