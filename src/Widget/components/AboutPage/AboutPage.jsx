import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Accordian from '../../../Components/Accordian';
import { School } from '../../../Global/SVG';

const styles = () => ({
  about: {
    marginTop: 64,
    padding: '2rem',
  },
});

const App = props => {
  const { classes } = props;
  const data = [
    {
      id: 1,
      summary: (
        <Grid container alignItems="center">
          <School />
          School
        </Grid>
      ),
      details: 'details',
    },
    {
      id: 2,
      summary: 'summary',
      details: 'details',
    },
    { id: 3, summary: 'summary', details: 'details' },
  ];
  return (
    <Grid container className={classes.about}>
      <Accordian data={data} defaultOpen={data[0].id} />
    </Grid>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
App.defaultProps = {};

export default withStyles(styles)(App);
