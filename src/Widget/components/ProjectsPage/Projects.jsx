import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = () => ({
  about: {
    marginTop: 64,
    padding: '2rem',
    minHeight: '80vh',
  },
});

const Projects = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.about}>
      <Grid item xs={12}>
        Page Development in Progress
      </Grid>
    </Grid>
  );
};

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};
Projects.defaultProps = {};

export default withStyles(styles)(Projects);
