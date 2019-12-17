import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = makeStyles(() => ({
  about: {
    padding: '2rem',
    paddingTop: '6.4rem',
    minHeight: '80vh'
  }
}));

const Ronaldo = () => {
  const classes = styles();
  return (
    <Grid container className={classes.about}>
      <Grid item xs={12}>
        Page Development in Progress
      </Grid>
    </Grid>
  );
};

Ronaldo.propTypes = {};
Ronaldo.defaultProps = {};

export default Ronaldo;
