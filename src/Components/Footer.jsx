import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from './Button';
import {
  FacebookIcon,
  LinkedInIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  HeartIcon
} from '../Global/SVG';

const styles = makeStyles(theme => ({
  footer: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.colors.footer
  },
  rights: {
    color: theme.colors.containerBackground,
    fontSize: '1.5rem',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  navLink: {
    color: theme.colors.containerBackground,
    fontSize: '1.5rem',
    backgroundColor: 'transparent',
    padding: '1rem 2rem',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&:focus': {
      backgroundColor: 'transparent'
    }
  },
  listItem: {
    marginBottom: '1rem',
    textAlign: 'center',
    '& button': {
      color: theme.colors.white,
      marginRight: '1.5rem',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '1rem',
        padding: '0.5rem 1rem'
      }
    }
  }
}));

const Footer = () => {
  const classes = styles();
  return (
    <Grid container className={classes.footer}>
      <Grid className={classes.listItem}>
        <Button
          onClick={() => {
            window.open(
              'https://www.facebook.com/jitendra.kumar.501',
              '_blank'
            );
          }}
          type={2}
        >
          <FacebookIcon />
        </Button>
        <Button
          onClick={() => {
            window.open('https://github.com/JitendraBhamidipati', '_blank');
          }}
          type={2}
        >
          <GithubIcon />
        </Button>
        <Button
          onClick={() => {
            window.open(
              'https://www.instagram.com/jitendra.bhamidipati/',
              '_blank'
            );
          }}
          type={2}
        >
          <InstagramIcon />
        </Button>
        <Button
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/jitendra-kumar-bhamidipati-a473b617a/',
              '_blank'
            );
          }}
          type={2}
        >
          <LinkedInIcon />
        </Button>
        <Button
          onClick={() => {
            window.open('https://twitter.com/jeetu241295', '_blank');
          }}
          type={2}
        >
          <TwitterIcon />
        </Button>
      </Grid>
      <Grid className={classes.listItem}>
        <Typography className={classes.rights} component="h6">
          Made with <HeartIcon />. &copy; Copyright 2019 by Jitendra Kumar. All
          rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {};
export default Footer;
