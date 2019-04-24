import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import homeImg from '../../../../static/images/home.jpg';

const styles = theme => ({
  home: {
    background: `url(${homeImg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    width: '100%',
    height: '90vh',
    paddingTop: '10rem',
    paddingBottom: '10rem',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  nameWrap: {
    borderTop: '2px solid',
    borderBottom: '2px solid white',
    width: '50%',
    borderColor: theme.colors.white
  },
  name: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '5rem',
    letterSpacing: '1.2rem',
    fontWeight: 900,
    color: 'transparent',
    backgroundImage: `linear-gradient(to right bottom, ${
      theme.colors.mainAction
    },${theme.colors.white})`,
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
    fontWeight: 500,
    marginBottom: '2.5rem',
    color: theme.colors.white,
    fontFamily: 'Courgette'
  },
  line: {
    borderBottom: '2px solid white'
  },
  helloWrap: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.home}>
      <Grid className={classes.overlay}>
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
    </Grid>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
