import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = () => ({
  about: {
    marginTop: 64,
    padding: '2rem',
    minHeight: '80vh',
  },
});

const NoPage = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.about}>
      <Grid item xs={12}>
        Error Page Not Found. Retrn to <Link to="/">home</Link>
      </Grid>
    </Grid>
  );
};

NoPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
NoPage.defaultProps = {};

export default withStyles(styles)(NoPage);
