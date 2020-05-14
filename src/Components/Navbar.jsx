import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Button from './Button';
import IconButton from './IconButton';
import logo from '../static/images/logo.jpg';
import {
  MenuIcon,
  HeartIcon,
  AboutIcon,
  ContactIcon,
  HomeIcon,
  ProjectsIcon
} from '../Global/SVG';

const styles = makeStyles(theme => ({
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
  menuButton: {
    marginTop: -7,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    marginRight: 'auto',
    color: theme.colors.white
  },
  navLinkWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  logo: {
    width: 35,
    height: 35,
    margin: '0 2rem'
  },
  appbar: {
    backgroundColor: theme.colors.navbar,
    opacity: 0.7,
    height: 64,
    top: 0,
    transition: 'all .3s ease-in',
    [theme.breakpoints.down('xs')]: {
      height: 48
    }
  },
  link: {
    color: theme.colors.white,
    textDecoration: 'none',
    zIndex: 1
  },
  navLink: {
    color: theme.colors.white,
    fontSize: '1.5rem',
    backgroundColor: 'transparent',
    padding: '1rem 2rem',
    position: 'relative',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&:focus': {
      backgroundColor: 'transparent'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 1rem'
    }
  },
  paper: {
    backgroundColor: theme.colors.navbar,
    width: '50%'
  },
  context: {
    color: theme.colors.white,
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  listItem: {
    borderBottom: '2px solid',
    borderColor: theme.colors.black,
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
    fill: theme.colors.white
  },
  rights: {
    borderTop: '2px solid',
    marginTop: 'auto',
    textAlign: 'center'
  },
  navUp: {
    top: -57,
    backgroundColor: theme.colors.mainAction,
    opacity: 1,
    '&:hover': {
      top: 0,
      backgroundColor: theme.colors.navbar,
      opacity: 0.7
    }
  },
  navDown: {}
}));

const ButtonAppBar = props => {
  const navBarHeight = 64;
  let lastScrollTop = 0;
  const [open, setOpen] = useState(false);
  const [isScrolledDown, setScrollDown] = useState(false);

  const { navs } = props;
  const classes = styles();

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

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classNames(classes.appbar, {
          [classes.navUp]: isScrolledDown === true,
          [classes.navDown]: isScrolledDown === false
        })}
      >
        <Toolbar disableGutters>
          <IconButton className={classes.menuButton} onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Drawer
            open={open}
            onClose={toggleDrawer}
            classes={{
              paper: classes.paper
            }}
          >
            <Grid className={classes.imageWrap}>
              <Link to="/">
                <img alt="JK" src={logo} className={classes.mobileLogo} />
              </Link>
            </Grid>
            <List className={classes.list}>
              {navs.map(nav => {
                let navIcon;
                if (nav === 'home')
                  navIcon = <HomeIcon className={classes.navIcon} />;
                if (nav === 'about')
                  navIcon = <AboutIcon className={classes.navIcon} />;
                if (nav === 'projects')
                  navIcon = <ProjectsIcon className={classes.navIcon} />;
                if (nav === 'contact')
                  navIcon = <ContactIcon className={classes.navIcon} />;
                return (
                  <ListItem
                    button
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                    key={nav}
                    className={classes.listItem}
                    disableGutters
                  >
                    <Link to={`/${nav}`}>
                      <ListItemIcon>{navIcon}</ListItemIcon>
                      <ListItemText
                        primary={nav}
                        classes={{
                          primary: classes.context
                        }}
                      />
                    </Link>
                  </ListItem>
                );
              })}
            </List>
            <ListItem className={classes.rights}>
              <ListItemText
                classes={{
                  primary: classes.context
                }}
              >
                Made with <HeartIcon />. &copy; Copyright 2019 by Jitendra
                Kumar. All rights reserved.
              </ListItemText>
            </ListItem>
          </Drawer>
          <Link to="/">
            <img alt="JK" src={logo} className={classes.logo} />
          </Link>
          <Grid className={classes.navLinkWrap}>
            {navs.map(nav => {
              let navIcon;
              if (nav === 'home') navIcon = <HomeIcon />;
              if (nav === 'about') navIcon = <AboutIcon />;
              if (nav === 'projects') navIcon = <ProjectsIcon />;
              if (nav === 'contact') navIcon = <ContactIcon />;
              return (
                <Button
                  key={nav.toString()}
                  className={classes.navLink}
                  onClick={() => {}}
                  disableElevation
                  startIcon={navIcon}
                >
                  <Link className={classes.link} to={`/${nav}`}>
                    {nav}
                  </Link>
                </Button>
              );
            })}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ButtonAppBar.propTypes = {
  navs: PropTypes.array.isRequired
};

export default ButtonAppBar;
