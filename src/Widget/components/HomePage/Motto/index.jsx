import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import motoImg from '../../../../static/images/motto.jpg';

const styles = makeStyles(theme => ({
  mottoWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem',
    backgroundColor: theme.colors.calenderColor,
    [theme.breakpoints.down('md')]: {
      padding: '3rem'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1.5rem'
    }
  },
  motto: {
    fontSize: '3rem',
    height: '3rem',
    lineHeight: '2.5rem',
    fontWeight: 900,
    textAlign: 'center',
    color: 'transparent',
    background: `url(${motoImg})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 46%',
    WebkitBackgroundClip: 'text',
    backgroundRepeat: 'no-repeat'
  }
}));

const Motto = props => {
  const { motto } = props;
  const classes = styles();
  return (
    <Grid container className={classes.mottoWrap}>
      <Typography className={classes.motto} variant="h1" component="h1">
        {motto}
      </Typography>
    </Grid>
  );
};

Motto.propTypes = {
  motto: PropTypes.string.isRequired
};
Motto.defaultProps = {};

export default Motto;
