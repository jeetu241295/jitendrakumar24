import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  SwipeableDrawer,
  AppBar,
  Toolbar
} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  root: {
    justifyContent: 'flex-start'
  },
  imageWrap: {
    display: 'flex',
    justifyContent: 'center',
    padding: '5rem',
    '& img': {
      width: 75,
      height: 75
    }
  },
  active: {
    color: 'primary.main'
  },
  menuButton: {
    display: { sm: 'none' },
    marginRight: 'auto',
    color: 'common.white'
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
    margin: '0 2rem'
  },
  appbar: {
    backgroundColor: 'colors.navbar',
    opacity: 0.7,
    height: { sm: 64 },
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
    padding: { xs: '0.5rem 1rem', sm: '1rem 2rem' },
    position: 'relative',
    '&:hover': {
      backgroundColor: 'colors.transparent',
      transform: 'none'
    },
    '&:focus': {
      backgroundColor: 'colors.transparent'
    }
  },
  paper: {
    backgroundColor: 'colors.navbar',
    width: '50%'
  },
  context: {
    display: 'flex',
    color: 'common.white',
    fontSize: '1.8rem',
    fontWeight: 'bold'
  },
  listItem: {
    // borderBottom: '2px solid',
    // borderColor: 'common.black',
    textTransform: 'uppercase',
    // '&:first-of-type': {
    // borderTop: '2px solid'
    // },
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
    color: 'common.white'
  },
  rights: {
    borderTop: '2px solid',
    marginTop: 'auto',
    textAlign: 'center'
  },
  navUp: {
    top: -57,
    backgroundColor: 'primary.main',
    opacity: 1,
    '&:hover': {
      top: 0,
      backgroundColor: 'colors.navbar',
      opacity: 0.7
    }
  },
  navDown: {}
};

const ButtonAppBar = props => {
  const navBarHeight = 64;
  let lastScrollTop = 0;
  const [open, setOpen] = useState(false);
  const [isScrolledDown, setScrollDown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { navs } = props;

  const hasScrolled = () => {
    const delta = 5;
    const st = document.documentElement.scrollTop;
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > navBarHeight) {
      setScrollDown(true);
    } else if (
      st + window.innerHeight <
      document.documentElement.scrollHeight
    ) {
      setScrollDown(false);
    }
    lastScrollTop = st;
  };

  const handleScroll = () => {
    hasScrolled();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      lastScrollTop = 0;
    };
  }, []);

  const toggleDrawer = (event, value) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(value);
  };

  return (
    <AppBar
      position="fixed"
      sx={[
        styles.appbar,
        isScrolledDown === true && styles.navUp,
        isScrolledDown === false && styles.navDown
      ]}
    >
      <Toolbar disableGutters>
        <IconButton
          id="menu-icon"
          sx={styles.menuButton}
          onClick={e => toggleDrawer(e, true)}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={e => toggleDrawer(e, false)}
          onOpen={e => toggleDrawer(e, true)}
          PaperProps={{ sx: styles.paper }}
        >
          <Grid sx={styles.imageWrap}>
            <Link to="/">
              <img alt="JK" src={logo} style={styles.mobileLogo} />
            </Link>
          </Grid>
          <List sx={styles.list}>
            {navs.map(nav => {
              let navIcon;
              if (nav === 'home') navIcon = <HomeIcon sx={styles.navIcon} />;
              if (nav === 'about') navIcon = <AboutIcon sx={styles.navIcon} />;
              if (nav === 'projects')
                navIcon = <ProjectsIcon sx={styles.navIcon} />;
              if (nav === 'contact')
                navIcon = <ContactIcon sx={styles.navIcon} />;
              return (
                <ListItemButton
                  alignItems="center"
                  selected={location.pathname === `/${nav}`}
                  onClick={e => {
                    toggleDrawer(e, false);
                    navigate(`/${nav}`);
                  }}
                  onKeyDown={e => {
                    toggleDrawer(e, false);
                    navigate(`/${nav}`);
                  }}
                  sx={styles.listItem}
                  key={nav}
                  disableGutters
                >
                  <ListItemIcon>{navIcon}</ListItemIcon>
                  <ListItemText primary={nav} sx={styles.context} />
                </ListItemButton>
              );
            })}
          </List>
          <ListItem sx={styles.rights}>
            <ListItemText sx={styles.context}>
              Made with <HeartIcon />. &copy; Copyright 2019 by Jitendra Kumar.
              All rights reserved.
            </ListItemText>
          </ListItem>
        </SwipeableDrawer>
        <Link to="/">
          <img alt="JK" src={logo} style={styles.logo} />
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
                sx={[
                  styles.navLink,
                  location.pathname === `/${nav}` && styles.active
                ]}
                key={nav.toString()}
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
  );
};

ButtonAppBar.propTypes = {
  navs: PropTypes.array.isRequired
};

export default ButtonAppBar;
