import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "./Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Love } from "../Global/SVG";
import classNames from "classnames";

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "flex-start"
  },
  menuButton: {
    marginLeft: -12,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    marginRight: "auto",
    color: theme.colors.white
  },
  navLinkWrap: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "none"
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
    transition: "all .3s ease-in",
    [theme.breakpoints.down("xs")]: {
      height: 48
    }
  },
  navLink: {
    color: theme.colors.white,
    fontSize: "1.5rem",
    backgroundColor: "transparent",
    padding: "1rem 2rem",
    "&:hover": {
      backgroundColor: "transparent"
    },
    "&:focus": {
      backgroundColor: "transparent"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 1rem"
    }
  },
  paper: {
    backgroundImage: `linear-gradient(to right bottom,${theme.colors.primary},${
      theme.colors.sideBar
    })`,
    width: "50%"
  },
  context: {
    color: theme.colors.white,
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  listItem: {
    borderBottom: "2px solid",
    borderColor: theme.colors.black,
    "&:first-child": {
      borderTop: "2px solid"
    }
  },
  rights: {
    borderTop: "2px solid",
    marginTop: "auto"
  },
  navUp: {
    top: -57,
    backgroundColor: theme.colors.mainAction,
    opacity: 1,
    "&:hover": {
      top: 0,
      backgroundColor: theme.colors.navbar,
      opacity: 0.7
    }
  },
  navDown: {}
});

class ButtonAppBar extends React.Component {
  state = {
    open: false,
    navBarHeight: 64,
    lastScrollTop: 0,
    isScrolledDown: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  hasScrolled = () => {
    const { navBarHeight, lastScrollTop } = this.state;
    const delta = 5;
    let st = document.documentElement.scrollTop;
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > navBarHeight) {
      this.setState({ isScrolledDown: true });
    } else if (
      st + window.innerHeight <
      document.documentElement.scrollHeight
    ) {
      this.setState({ isScrolledDown: false });
    }
    this.setState({ lastScrollTop: st });
  };
  handleScroll = () => {
    this.setState({ scrollY: window.scrollY });
    this.hasScrolled();
  };
  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const { classes, navs } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appbar, {
            [classes.navUp]: this.state.isScrolledDown === true,
            [classes.navDown]: this.state.isScrolledDown === false
          })}
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              onClick={this.toggleDrawer}
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={this.state.open}
              onClose={this.toggleDrawer}
              classes={{
                paper: classes.paper
              }}
            >
              <List className={classes.list}>
                {navs.map(nav => (
                  <ListItem
                    button
                    onClick={this.toggleDrawer}
                    onKeyDown={this.toggleDrawer}
                    key={nav}
                    className={classes.listItem}
                  >
                    <ListItemText
                      primary={nav}
                      classes={{
                        primary: classes.context
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <ListItem className={classes.rights}>
                <ListItemText
                  classes={{
                    primary: classes.context
                  }}
                >
                  Made with <Love />. &copy; Copyright 2019 by Jitendra Kumar.
                  All rights reserved.
                </ListItemText>
              </ListItem>
            </Drawer>
            <img
              alt="JK"
              src={require("../static/images/logo.jpg")}
              className={classes.logo}
            />
            <Grid className={classes.navLinkWrap}>
              {navs.map(nav => (
                <Button key={nav.toString()} className={classes.navLink}>
                  {nav}
                </Button>
              ))}
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  navs: PropTypes.array.isRequired
};

export default withStyles(styles)(ButtonAppBar);
