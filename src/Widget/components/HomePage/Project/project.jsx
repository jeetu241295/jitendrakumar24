import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const styles = () => ({});

const Project = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.Project}>
      Project
    </Grid>
  );
};

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Project);
