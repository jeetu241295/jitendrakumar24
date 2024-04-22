import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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
  footer: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'colors.footer'
  },
  rights: {
    color: 'colors.containerBackground',
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  navLink: {
    color: 'colors.containerBackground',
    fontSize: '1.5rem',
    backgroundColor: 'colors.transparent',
    padding: '1rem 2rem',
    '&:hover': {
      backgroundColor: 'colors.transparent'
    },
    '&:focus': {
      backgroundColor: 'colors.transparent'
    }
  },
  listItem: {
    marginBottom: '1rem',
    textAlign: 'center'
  },
  button: {
    color: 'common.white',
    marginRight: '1.5rem',
    mb: '1rem',
    p: { xs: '0.5rem 1rem', md: 0 }
  }
};

const icons = [
  {
    id: 'facbook-icon',
    icon: <FacebookIcon />,
    url: 'https://www.facebook.com/jitendra.kumar.501'
  },
  {
    id: 'github-icon',
    icon: <GithubIcon />,
    url: 'https://github.com/JitendraBhamidipati'
  },
  {
    id: 'instagram-icon',
    icon: <InstagramIcon />,
    url: 'https://www.instagram.com/jitendra.bhamidipati/'
  },
  {
    id: 'linkedin-icon',
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/jitendra-kumar-bhamidipati-a473b617a'
  },
  {
    id: 'twitter-icon',
    icon: <TwitterIcon />,
    url: 'https://twitter.com/jeetu241295'
  }
];

function Footer() {
  return (
    <Grid container sx={styles.footer} textAlign="center">
      {icons.map(item => (
        <Grid key={item.id} item xs={1}>
          <IconButton
            sx={styles.button}
            id={item.id}
            onClick={() => {
              window.open(item.url, '_blank');
            }}
          >
            {item.icon}
          </IconButton>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Typography sx={styles.rights} component="div" variant="h6">
          Made with <HeartIcon />. &copy; Copyright 2019 by Jitendra Kumar. All
          rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {};
export default Footer;
