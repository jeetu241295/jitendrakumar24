import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Accordian from '../../../Components/Accordian';
import { School, Engineering, Work } from '../../../Global/SVG';
import Normal from '../../../Components/Normal';
import Tabs from '../../../Components/Tabs';
import AlternatePanel from '../../../Components/AlternatePanel';

const styles = theme => ({
  about: {
    marginTop: 64,
    padding: '2rem',
  },
  summaryTitle: {
    color: theme.colors.black,
    marginLeft: '1rem',
  },
});

const App = props => {
  const { classes, schoolDetails, underGraduateDetails, workDetails } = props;
  const data = [
    {
      id: 1,
      summary: (
        <Grid container alignItems="center">
          <School />
          <Normal className={classes.summaryTitle}>School Life</Normal>
        </Grid>
      ),
      details: <AlternatePanel data={schoolDetails} />,
    },
    {
      id: 2,
      summary: (
        <Grid container alignItems="center">
          <Engineering />
          <Normal className={classes.summaryTitle}>Engineering</Normal>
        </Grid>
      ),
      details: <AlternatePanel data={underGraduateDetails} />,
    },
    {
      id: 3,
      summary: (
        <Grid container alignItems="center">
          <Work />
          <Normal className={classes.summaryTitle}>Work</Normal>
        </Grid>
      ),
      details: <AlternatePanel data={workDetails} />,
    },
  ];
  const tabs = [
    {
      id: 1,
      label: 'Career',
      content: <Accordian data={data} defaultOpen={data[0].id} />,
    },
    {
      id: 1,
      label: 'Personal',
      content: '',
    },
  ];
  return (
    <Grid container className={classes.about}>
      <Grid item xs={12}>
        <Tabs tabs={tabs} />
      </Grid>
    </Grid>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
  schoolDetails: PropTypes.array.isRequired,
  underGraduateDetails: PropTypes.array.isRequired,
  workDetails: PropTypes.array.isRequired,
};
App.defaultProps = {};

export default withStyles(styles)(App);
