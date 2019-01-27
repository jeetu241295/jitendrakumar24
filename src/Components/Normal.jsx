import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => ({
  normal: {
    color: theme.colors.white,
    fontSize: "1.25rem",
    marginBottom: "1rem"
  }
});

const Normal = props => {
  const { classes, children } = props;
  return <Grid className={classes.normal}>{children}</Grid>;
};

Normal.propType = {
  class: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired
};
Normal.defaultProps = {};

export default withStyles(styles)(Normal);
