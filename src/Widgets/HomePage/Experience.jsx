import React from 'react';
import Grid from '@mui/material/Grid';
import TimeLine from '__SHARED__/TimeLine';
import { education, experience } from '../_helpers/constants';

const styles = {
  experienceWrap: {
    backgroundColor: 'colors.containerBackground',
    padding: '3rem 0'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 500,
    margin: '1rem',
    textAlign: 'center'
  }
};

const Experience = () => {
  return (
    <Grid container sx={styles.experienceWrap}>
      <Grid item md={6} xs={12}>
        <Grid sx={styles.title}>Education</Grid>
        <TimeLine data={education} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Grid sx={styles.title}>Experience</Grid>
        <TimeLine data={experience} />
      </Grid>
    </Grid>
  );
};

Experience.propTypes = {};
export default Experience;
