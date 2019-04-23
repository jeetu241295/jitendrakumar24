import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '../Button';
import {
  Facebook,
  LinkedIn,
  Github,
  Instagram,
  Twitter,
  Love,
} from '../../Global/SVG';

const styles = theme => ({
  footer: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.colors.footer,
  },
  rights: {
    color: theme.colors.containerBackground,
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  navLink: {
    color: theme.colors.containerBackground,
    fontSize: '1.5rem',
    backgroundColor: 'transparent',
    padding: '1rem 2rem',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  listItem: {
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& button': {
      [theme.breakpoints.down('sm')]: {
        marginBottom: '1rem',
        padding: '0.5rem 1rem',
      },
    },
  },
});

const Footer = props => {
  const { classes, navs } = props;
  return (
    <Grid container className={classes.footer}>
      <Grid className={classes.listItem}>
        <Button
          onClick={() => {
            window.open(
              'https://www.facebook.com/jitendra.kumar.501',
              '_blank',
            );
          }}
          type={2}
        >
          <Facebook />
        </Button>
        <Button
          onClick={() => {
            window.open('https://github.com/jeetu241295', '_blank');
          }}
          type={2}
        >
          <Github />
        </Button>
        <Button
          onClick={() => {
            window.open(
              'https://www.instagram.com/jitendra.bhamidipati/',
              '_blank',
            );
          }}
          type={2}
        >
          <Instagram />
        </Button>
        <Button
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/jitendra-kumar-bhamidipati-a473b617a/',
              '_blank',
            );
          }}
          type={2}
        >
          <LinkedIn />
        </Button>
        <Button
          onClick={() => {
            window.open('https://twitter.com/jeetu241295', '_blank');
          }}
          type={2}
        >
          <Twitter />
        </Button>
      </Grid>
      <Grid className={classes.listItem}>
        {navs.map(nav => (
          <Link key={nav.toString()} to={`/${nav}`}>
            <Button className={classes.navLink} type={3} onClick={() => {}}>
              {nav}
            </Button>
          </Link>
        ))}
      </Grid>
      <Grid className={classes.listItem}>
        <Typography className={classes.rights} component="h6">
          Made with <Love />. &copy; Copyright 2019 by Jitendra Kumar. All
          rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  navs: PropTypes.array.isRequired,
};
export default withStyles(styles)(Footer);
