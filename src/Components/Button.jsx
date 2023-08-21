import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const styles = {
  buttonStyle: {
    borderRadius: '50px',
    fontSize: '1.5rem',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      '&::after': {
        transform: 'scale(1.5)',
        opacity: 0
      }
    },
    '&:active': {
      transform: 'translateY(0px)',
      outline: 'none'
    },
    '&:focus': {
      transform: 'translateY(0px)',
      outline: 'none'
    }
  }
};

const Button24 = props => {
  const { children, onClick, icon, sx, variant, ...other } = props;
  console.log([styles.buttonStyle, ...(Array.isArray(sx) ? sx : [sx])]);
  return (
    <Button
      sx={[styles.buttonStyle, ...(Array.isArray(sx) ? sx : [sx])]}
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
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};
Button24.defaultProps = {
  icon: null,
  children: null,
  variant: 'contained',
  sx: {}
};

export default Button24;
