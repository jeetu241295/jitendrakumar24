import React from "react";
import { Button, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import classNames from "classnames";

const styles = theme => ({
  buttonStyle: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    borderColor: "transparent",
    borderRadius: 5,
    padding: "10px 60px",
    fontSize: 16,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.colors.primary,
      // transform: "translateY(-5px)",
      boxShadow: "0 1rem 2rem rgba($color-black, 0.2)",
      "&::after": {
        transform: "scale(1.5)",
        opacity: 0
      }
    },
    "&:active": {
      backgroundColor: theme.colors.primary,
      // transform: "translateY(-2px)",
      boxShadow: "0 .5rem 1rem rgba($color-black, 0.2)",
      outline: "none"
    },
    "&:focus": {
      backgroundColor: theme.colors.primary,
      // transform: "translateY(-2px)",
      boxShadow: "0 .5rem 1rem rgba($color-black, 0.2)",
      outline: "none"
    }
  }
});

const Button24 = props => {
  const { classes, children, disabled, onClick, icon, className } = props;
  return (
    <Button
      className={classNames(className, classes.buttonStyle)}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>icon</span>}
      {children}
    </Button>
  );
};

Button24.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.node,
  disabled: PropTypes.bool
};
Button24.defaultProps = {
  icon: null,
  className: null,
  children: null,
  disabled: false
};

export default withStyles(styles)(Button24);
