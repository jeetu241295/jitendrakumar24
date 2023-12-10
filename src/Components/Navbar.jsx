import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ListItemIcon,
  ListItemText,
  ListItem,
  ListItemButton,
  List,
  Drawer,
  AppBar,
  Toolbar,
  Grid,
  Slide,
  useScrollTrigger
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {
  MenuIcon,
  HeartIcon,
  AboutIcon,
  ContactIcon,
  HomeIcon,
  ProjectsIcon
} from '__ASSETS__/SVG';
import Button from './Button';
import IconButton from './IconButton';
import logo from '../Assets/Images/logo';

const styles = {
  toolBar: {
    height: { xs: 48, sm: 64 }
  },
  drawer: {
    '& .MuiDrawer-paper': {
      bgcolor: 'colors.navbar',
      width: 275
    }
  },
  mobileLogo: {
    width: 125,
    height: 125,
    p: '3rem'
  },
  menuButton: {
    display: { xs: 'block', sm: 'none' },
    marginRight: 'auto',
    color: 'common.white',
    p: 0
  },
  navLinkWrap: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 'auto',
    display: { xs: 'none', sm: 'flex' }
  },
  logo: {
    width: 35,
    height: 35,
    m: { xs: 0, sm: '0 2rem' },
    marginRight: '2rem'
  },
  appbar: {
    backgroundColor: 'colors.navbar',
    opacity: 0.7,
    top: 0,
    transition: 'all .3s ease-in'
  },
  link: {
    color: 'common.white',
    textDecoration: 'none',
    zIndex: 1
  },
  navLink: {
    color: 'common.white',
    fontSize: '1.5rem',
    backgroundColor: 'colors.transparent',
    p: { xs: '0.5rem 1rem', sm: '1rem 2rem' },
    position: 'relative',
    '&:hover': {
      backgroundColor: 'colors.transparent',
      transform: 'none',
      boxShadow: 0
    },
    '&:active': {
      boxShadow: 0
    },
    '&:focus': {
      backgroundColor: 'colors.transparent'
    }
  },
  context: {
    color: 'common.white',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  listItem: {
    borderBottom: '2px solid',
    borderColor: 'common.black',
    textTransform: 'uppercase',
    '&:first-child': {
      borderTop: '2px solid'
    },
    '& a': {
      display: 'flex',
      width: '100%',
      margin: '0 16px',
      '&:active': {
        textDecoration: 'none'
      },
      '&:focus': {
        outline: 0
      }
    }
  },
  navIcon: {
    fill: 'common.white',
    alignItems: 'center'
  },
  rights: {
    borderTop: '2px solid',
    marginTop: 'auto',
    textAlign: 'center'
  }
};

function HideOnScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: undefined
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired
};

function Navbar(props) {
  const { navs } = props;
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
  const navigate = useNavigate();

  return (
    <HideOnScroll {...props}>
      <AppBar sx={styles.appbar}>
        <Toolbar sx={styles.toolBar}>
          <IconButton
            id="menu-icon"
            sx={styles.menuButton}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Drawer sx={styles.drawer} open={open} onClose={toggleDrawer}>
            <Grid container justifyContent="center" sx={styles.wrapper}>
              <Link to="/">
                <Grid
                  component="img"
                  alt="JK"
                  src={logo}
                  sx={styles.mobileLogo}
                />
              </Link>
              <Grid item xs={12}>
                <List sx={styles.list}>
                  {navs.map(nav => {
                    let navIcon;
                    if (nav === 'home')
                      navIcon = <HomeIcon sx={styles.navIcon} />;
                    if (nav === 'about')
                      navIcon = <AboutIcon sx={styles.navIcon} />;
                    if (nav === 'projects')
                      navIcon = <ProjectsIcon sx={styles.navIcon} />;
                    if (nav === 'contact')
                      navIcon = <ContactIcon sx={styles.navIcon} />;
                    return (
                      <ListItemButton
                        onClick={() => {
                          toggleDrawer();
                          navigate(`/${nav}`);
                        }}
                        onKeyDown={() => {
                          toggleDrawer();
                          navigate(`/${nav}`);
                        }}
                        key={nav}
                        sx={styles.listItem}
                        disableGutters
                      >
                        <ListItemIcon sx={styles.navIcon}>
                          {navIcon}
                        </ListItemIcon>
                        <ListItemText primary={nav} sx={styles.context} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
            <ListItem sx={styles.rights}>
              <ListItemText sx={styles.context}>
                Made with <HeartIcon />. &copy; Copyright 2019 by Jitendra
                Kumar. All rights reserved.
              </ListItemText>
            </ListItem>
          </Drawer>
          <Link to="/">
            <Grid component="img" alt="JK" src={logo} sx={styles.logo} />
          </Link>
          <Grid sx={styles.navLinkWrap}>
            {navs.map(nav => {
              let navIcon;
              if (nav === 'home') navIcon = <HomeIcon />;
              if (nav === 'about') navIcon = <AboutIcon />;
              if (nav === 'projects') navIcon = <ProjectsIcon />;
              if (nav === 'contact') navIcon = <ContactIcon />;
              return (
                <Button
                  key={nav.toString()}
                  disableRipple
                  disableFocusRipple
                  sx={styles.navLink}
                  onClick={() => navigate(`/${nav}`)}
                  disableElevation
                  startIcon={navIcon}
                >
                  {nav}
                </Button>
              );
            })}
          </Grid>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

Navbar.propTypes = {
  navs: PropTypes.array.isRequired
};

Navbar.defaulProps = {};

export default Navbar;
