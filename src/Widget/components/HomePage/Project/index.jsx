import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const styles = () => ({});

const Projects = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.Projects}>
      Projects
    </Grid>
  );
};

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Projects);
