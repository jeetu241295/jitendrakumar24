import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { Menu as MenuIcon } from '@material-ui/icons';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Love } from '../Global/SVG';
import Button from './Button';
import logo from '../static/images/logo.jpg';

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
    marginLeft: -12,
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
    height: 35
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
      backgroundColor: 'transparent',
      transform: 'none'
    },
    '&:focus': {
      backgroundColor: 'transparent',
      transform: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 1rem'
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: 3,
      backgroundColor: theme.colors.mainAction,
      transform: 'scaleY(0)',
      transition:
        'transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, backgroundColor 0.1s'
    },
    '&:hover::before': {
      width: '100%',
      transform: 'scaleY(1)'
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
    }
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
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            onClick={toggleDrawer}
            aria-label="Menu"
          >
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
              {navs.map(nav => (
                <ListItem
                  button
                  onClick={toggleDrawer}
                  onKeyDown={toggleDrawer}
                  key={nav}
                  className={classes.listItem}
                >
                  <Link to={`/${nav}`}>
                    <ListItemText
                      primary={nav}
                      classes={{
                        primary: classes.context
                      }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
            <ListItem className={classes.rights}>
              <ListItemText
                classes={{
                  primary: classes.context
                }}
              >
                Made with <Love />. &copy; Copyright 2019 by Jitendra Kumar. All
                rights reserved.
              </ListItemText>
            </ListItem>
          </Drawer>
          <Link to="/">
            <img alt="JK" src={logo} className={classes.logo} />
          </Link>
          <Grid className={classes.navLinkWrap}>
            {navs.map(nav => (
              <Button
                key={nav.toString()}
                className={classes.navLink}
                onClick={() => {}}
              >
                <Link className={classes.link} to={`/${nav}`}>
                  {nav}
                </Link>
              </Button>
            ))}
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
