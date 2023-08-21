import React from 'react';
import { Grid, Typography } from '@mui/material';
import {
  FacebookIcon,
  LinkedInIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  HeartIcon
} from '__ASSETS__/SVG';
import IconButton from './IconButton';

const styles = {
  rights: {
    color: 'colors.containerBackground',
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  footer: {
    pb: '2rem',
    backgroundColor: 'colors.footer',
    '& button': {
      color: 'common.white',
      marginRight: '1.5rem'
    }
  }
};

const Footer = () => {
  return (
    <Grid
      container
      sx={styles.footer}
      component="footer"
      justifyContent="center"
      spacing={1}
      alignItems="center"
    >
      <Grid item xs={1}>
        <IconButton
          onClick={() => {
            window.open(
              'https://www.facebook.com/jitendra.kumar.501',
              '_blank'
            );
          }}
        >
          <FacebookIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton
          onClick={() => {
            window.open('https://github.com/JitendraBhamidipati', '_blank');
          }}
        >
          <GithubIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton
          onClick={() => {
            window.open(
              'https://www.instagram.com/jitendra.bhamidipati/',
              '_blank'
            );
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/jitendra-kumar-bhamidipati-a473b617a/',
              '_blank'
            );
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton
          onClick={() => {
            window.open('https://twitter.com/jeetu241295', '_blank');
          }}
        >
          <TwitterIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={styles.rights} component="div" variant="h6">
          Made with <HeartIcon />. &copy; Copyright 2019 by Jitendra Kumar. All
          rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {};
export default Footer;
