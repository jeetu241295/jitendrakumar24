import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import Card from './Card';

const styles = theme => ({
  experienceWrap: {
    backgroundColor: theme.colors.containerBackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '7rem',
    [theme.breakpoints.down('md')]: {
      padding: '5rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '3rem',
    },
  },
  title: {
    fontSize: '3rem',
    fontWeight: 500,
    margin: '1rem',
  },
});

const Experience = props => {
  const { classes, education, experience } = props;
  return (
    <Grid container className={classes.experienceWrap}>
      <Grid item sm={5} xs={12} className={classes.education}>
        <Typography className={classes.title} variant="h3" componeent="h3">
          Education
        </Typography>
        {education.map(e => (
          <Card key={e.id} item={e} />
        ))}
      </Grid>
      <Grid item sm={5} xs={12} className={classes.experience}>
        <Typography className={classes.title} variant="h3" componeent="h3">
          Experience
        </Typography>
        {experience.map(e => (
          <Card key={e.id} item={e} />
        ))}
      </Grid>
    </Grid>
  );
};

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
};
export default withStyles(styles)(Experience);
