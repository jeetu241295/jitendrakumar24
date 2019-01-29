import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({});

const About = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.about}>
      About
    </Grid>
  );
};

About.propTypes = {
  class: PropTypes.object.isRequired
};
About.defaultProps = {};

export default withStyles(styles)(About);
