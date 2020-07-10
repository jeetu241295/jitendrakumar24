import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import TimeLine from '__SHARED__/TimeLine';
// import Card from './card';

const styles = makeStyles(theme => ({
  experienceWrap: {
    backgroundColor: theme.colors.containerBackground,
    padding: '3rem 0'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 500,
    margin: '1rem',
    textAlign: 'center'
  }
}));

const Experience = props => {
  const { education, experience } = props;
  const classes = styles();

  return (
    <Grid container className={classes.experienceWrap}>
      <Grid item sm={6} xs={12}>
        <Grid className={classes.title}>Education</Grid>
        <TimeLine data={education} />
      </Grid>
      <Grid item sm={6} xs={12}>
        <Grid className={classes.title}>Experience</Grid>
        <TimeLine data={experience} />
      </Grid>
    </Grid>
  );
};

Experience.propTypes = {
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired
};
export default Experience;
