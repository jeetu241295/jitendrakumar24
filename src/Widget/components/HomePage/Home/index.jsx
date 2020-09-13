import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import gal11 from '__ASSETS__/Images/gal-11';

const styles = makeStyles(theme => ({
  home: {
    background: `linear-gradient(to bottom,${theme.colors.black5},${theme.colors.black5}),url(${gal11}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    width: '100%',
    height: '90vh',
    paddingTop: '10rem',
    paddingBottom: '10rem',
    position: 'relative',
    display: 'flex',
    backgroundBlendMode: 'soft-light',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: '60% 50%'
    }
  },
  nameWrap: {
    borderTop: `2px solid ${theme.colors.white}`,
    borderBottom: `2px solid ${theme.colors.white}`,
    width: '50%'
  },
  name: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '5rem',
    letterSpacing: '1.2rem',
    fontWeight: 900,
    color: theme.colors.transparent,
    backgroundImage: `linear-gradient(to bottom, ${theme.colors.mainAction},${theme.colors.white})`,
    WebkitBackgroundClip: 'text',
    padding: '2rem',
    fontFamily: 'Raleway Webfont',
    [theme.breakpoints.between('sm', 'md')]: {
      padding: '1.2rem'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
      fontSize: '2.5rem',
      letterSpacing: '0.5rem'
    }
  },
  hello: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '2.5rem',
    color: theme.colors.mainAction,
    fontFamily: 'Courgette'
  },
  line: {
    borderBottom: `2px solid ${theme.colors.mainAction}`
  },
  helloWrap: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

const Home = () => {
  const classes = styles();
  return (
    <Grid container className={classes.home}>
      <Grid className={classes.helloWrap}>
        <Grid className={classes.line} />
        <Typography className={classes.hello} component="h6" variant="h6">
          Hey, I&#39;m
        </Typography>
        <Grid className={classes.line} />
      </Grid>
      <Grid className={classes.nameWrap}>
        <Typography className={classes.name} component="h2" variant="h1">
          Jitendra
        </Typography>
        <Typography className={classes.name} component="h2" variant="h1">
          Kumar
        </Typography>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {};
export default Home;
