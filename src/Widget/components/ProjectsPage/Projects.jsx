import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Normal from '../../../Components/Normal';

const styles = () => ({
  about: {
    marginTop: 64,
    padding: '2rem',
    minHeight: '80vh'
  },
  text: {
    fontSize: '3rem'
  }
});

const Projects = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.about}>
      <Grid item xs={12}>
        <Normal className={classes.text}>Page Development in Progress</Normal>
      </Grid>
    </Grid>
  );
};

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};
Projects.defaultProps = {};

export default withStyles(styles)(Projects);
