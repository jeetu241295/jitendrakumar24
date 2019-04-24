import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import classNames from 'class-names';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles1 = theme => ({
  success: {
    backgroundColor: theme.colors.mainAction
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, ...other } = props;

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
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  },
  root: {
    backgroundColor: theme.colors.mainAction
  }
});

class SimpleSnackbar extends React.Component {
  state = {
    open: true
  };

  componentWillReceiveProps(newProps) {
    if (newProps.open !== null) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { message } = this.props;
    const { open } = this.state;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={5000}
        onClose={this.handleClose}
      >
        <MySnackbarContentWrapper
          onClose={this.handleClose}
          message={message}
        />
      </Snackbar>
    );
  }
}

SimpleSnackbar.propTypes = {
  message: PropTypes.string.isRequired
};

export default withStyles(styles)(SimpleSnackbar);
