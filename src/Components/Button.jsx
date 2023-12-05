import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const styles = {
  buttonStyle: {
    borderRadius: 5,
    fontSize: '1.5rem',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: 2,
      '&::after': {
        transform: 'scale(1.5)',
        opacity: 0
      }
    },
    '&:active': {
      transform: 'translateY(0px)',
      boxShadow: 2,
      outline: 'none'
    },
    '&:focus': {
      transform: 'translateY(0px)',
      boxShadow: 1,
      outline: 'none'
    }
  },
  primary: {
    color: 'common.white',
    '&:hover': {
      backgroundColor: 'primary.main'
    }
  },
  secondary: {
    backgroundColor: 'secondary.main',
    '&:hover': {
      backgroundColor: 'secondary.main'
    }
  }
};

const Button24 = props => {
  const { children, onClick, icon, sx, color, variant, ...other } = props;
  return (
    <Button
      sx={[
        styles.buttonStyle,
        color === 'primary' && styles.primary,
        color === 'secondary' && styles.secondary,
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      disableFocusRipple
      onClick={onClick}
      variant={variant}
      {...other}
    >
      {children}
    </Button>
  );
};

Button24.propTypes = {
  color: PropTypes.string,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string
};
Button24.defaultProps = {
  icon: null,
  sx: {},
  children: null,
  variant: 'contained'
};

export default Button24;
