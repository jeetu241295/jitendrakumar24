import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "./Button";
import Grid from "@material-ui/core/Grid";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "flex-start"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navLinkWrap: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: "auto"
  },
  logo: {
    width: 35,
    height: 35
  },
  appbar: {
    backgroundColor: theme.colors.navbar,
    opacity: 0.7
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
    }
  }
});

const ButtonAppBar = props => {
  const { classes, navs } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          {/* <IconButton className={classes.menuButton} aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <img
            alt="JK"
            src={require("../static/images/l3.jpg")}
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
};

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  navs: PropTypes.array.isRequired
};

export default withStyles(styles)(ButtonAppBar);
