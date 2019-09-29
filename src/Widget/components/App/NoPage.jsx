import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Normal from '../../../Components/Normal';
import lostImg from '../../../static/images/lost.jpg';

const styles = theme => ({
  about: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
    padding: '2rem',
    paddingTop: '6.4rem'
  },
  textWrap: {
    flexDirection: 'column'
  },
  imgWrap: {
    width: '25rem',
    height: '25rem',
    [theme.breakpoints.down('sm')]: {
      width: '20rem',
      height: '20rem'
    }
  },
  oops: {
    fontWeight: 'bold',
    fontSize: '8rem',
    marginBottom: '3rem'
  },
  text: {
    color: theme.colors.black,
    fontSize: '1.5rem',
    lineHeight: 1.5
  }
});

const NoPage = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.about}>
      <Grid item md={4} sm={6} xs={12}>
        <img className={classes.imgWrap} src={lostImg} alt="Lost" />
      </Grid>
      <Grid item md={8} sm={6} xs={12} className={classes.textWrap}>
        <Normal className={classes.oops}>Oops..!</Normal>
        <Normal className={classes.text}>
          It seams you have lost in the path of search or something might have
          gone wrong.
        </Normal>
        <Normal className={classes.text}>
          Please go to the <Link to="/">home</Link> Page
        </Normal>
      </Grid>
    </Grid>
  );
};

NoPage.propTypes = {
  classes: PropTypes.object.isRequired
};
NoPage.defaultProps = {};

export default withStyles(styles)(NoPage);
