import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = makeStyles(theme => ({
  buttonStyle: {
    borderRadius: 5,
    fontSize: '1.5rem',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 1rem 2rem rgba(0,0,0, 0.2)',
      '&::after': {
        transform: 'scale(1.5)',
        opacity: 0
      }
    },
    '&:active': {
      transform: 'translateY(0px)',
      boxShadow: '0 .5rem 1rem rgba(0,0,0, 0.2)',
      outline: 'none'
    },
    '&:focus': {
      transform: 'translateY(0px)',
      boxShadow: '0 .5rem 1rem rgba(0,0,0, 0.2)',
      outline: 'none'
    }
  },
  primary: {
    color: theme.colors.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  secondary: {
    '&:hover': {
      backgroundColor: theme.palette.secondary.main
    }
  }
}));

const Button24 = props => {
  const { children, onClick, icon, className, variant, ...other } = props;
  const classes = styles(props);
  return (
    <Button
      className={classNames(classes.buttonStyle, className)}
      disableFocusRipple
      onClick={onClick}
      variant={variant}
      classes={{
        containedPrimary: classes.primary,
        containedSecondary: classes.secondary
      }}
      {...other}
    >
      {children}
    </Button>
  );
};

Button24.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string
};
Button24.defaultProps = {
  icon: null,
  className: null,
  children: null,
  variant: 'contained'
};

export default Button24;
