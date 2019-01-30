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
    padding: "1rem 3.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.colors.primary,
      transform: "translateY(-5px)",
      boxShadow: "0 1rem 2rem rgba(0,0,0, 0.2)",
      "&::after": {
        transform: "scale(1.5)",
        opacity: 0
      }
    },
    "&:active": {
      backgroundColor: theme.colors.primary,
      transform: "translateY(0px)",
      boxShadow: "0 .5rem 1rem rgba(0,0,0, 0.2)",
      outline: "none"
    },
    "&:focus": {
      backgroundColor: theme.colors.primary,
      transform: "translateY(0px)",
      boxShadow: "0 .5rem 1rem rgba(0,0,0, 0.2)",
      outline: "none"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 2rem"
    }
  },
  iconButtonStyle: {
    backgroundColor: "transparent",
    padding: 0
  }
});

const Button24 = props => {
  const { classes, children, disabled, onClick, icon, className, type } = props;
  const buttonStyle =
    type === 2 ? classes.iconButtonStyle : classes.buttonStyle;
  return (
    <Button
      className={classNames(className, buttonStyle)}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={classes.iconStyle}>{icon}</span>}
      {children}
    </Button>
  );
};

Button24.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.number
};
Button24.defaultProps = {
  icon: null,
  className: null,
  children: null,
  disabled: false,
  type: 1
};

export default withStyles(styles)(Button24);
