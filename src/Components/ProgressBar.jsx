import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography, Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  primary: {
    color: theme.colors.progressbarColor,
    backgroundColor: theme.colors.footerNav,
    borderRadius: '10px'
  },
  value: {
    fontSize: '1.5rem',
    fontWeight: 500,
    marginLeft: '1.5rem',
    textAlign: 'center'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 500,
    marginBottom: '0.5rem'
  }
});

const ProgressBar = props => {
  const { classes, value, heading } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item md={11} xs={10}>
        <Typography className={classes.title} variant="h4" component="h4">
          {heading}
        </Typography>
        <LinearProgress
          classes={{
            colorPrimary: classes.primary
          }}
          variant="determinate"
          value={value}
        />
      </Grid>
      <Grid item md={1} xs={2}>
        <Typography className={classes.value} variant="h4" component="h4">
          {value}%
        </Typography>
      </Grid>
    </Grid>
  );
};

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  heading: PropTypes.string
};
ProgressBar.defaultProps = {
  heading: null
};

export default withStyles(styles)(ProgressBar);
