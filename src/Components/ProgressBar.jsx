import React from 'react';
import PropTypes from 'prop-types';

import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  primary: {
    color: 'colors.progressbarColor',
    backgroundColor: 'colors.footerNav',
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
};

function ProgressBar(props) {
  const { value, heading } = props;

  return (
    <Grid container sx={styles.root}>
      <Grid item md={11} xs={10}>
        <Typography sx={styles.title} variant="h4" component="h4">
          {heading}
        </Typography>
        <LinearProgress
          sx={styles.primary}
          variant="determinate"
          value={value}
        />
      </Grid>
      <Grid item md={1} xs={2}>
        <Typography sx={styles.value} variant="h5" component="h5">
          {value}%
        </Typography>
      </Grid>
    </Grid>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  heading: PropTypes.string
};
ProgressBar.defaultProps = {
  heading: null
};

export default ProgressBar;
