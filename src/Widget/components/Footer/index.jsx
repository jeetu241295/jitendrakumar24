import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
// import {
//   Facebook,
//   LinkedIn,
//   Github,
//   Instagram,
//   GooglePlus,
//   Twitter
// } from "../../../Global/SVG";

const styles = theme => ({
  footer: {
    padding: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.colors.footer
  },
  rights: {
    color: theme.colors.footerNav
  },
  navLink: {
    color: theme.colors.footerNav
  }
});

const Footer = props => {
  const { classes, navs } = props;
  return (
    <Grid container className={classes.footer}>
      <Grid>
        {navs.map(nav => (
          <Button key={nav.toString()} className={classes.navLink}>
            {nav}
          </Button>
        ))}
      </Grid>
      <Grid>
        <Typography className={classes.rights} component="h6">
          Made with love. &copy; Copyright 2019 by Jitendra Kumar. All rights
          reserved.
        </Typography>
      </Grid>
      {/* <Grid>
        <Button
          onClick={() => {
            window.open(
              "https://www.facebook.com/jitendra.kumar.501",
              "_blank"
            );
          }}
        >
          <Facebook />
        </Button>
        <Button
          onClick={() => {
            window.open("https://github.com/jeetu241295", "_blank");
          }}
        >
          <Github />
        </Button>
        <Button
          onClick={() => {
            window.open(
              "https://www.instagram.com/jitendra.bhamidipati/",
              "_blank"
            );
          }}
        >
          <Instagram />
        </Button>
        <Button
          onClick={() => {
            window.open(
              "https://plus.google.com/+JitendrakumarBhamidipati",
              "_blank"
            );
          }}
        >
          <GooglePlus />
        </Button>
        <Button
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/jitendra-kumar-bhamidipati-a473b617a/",
              "_blank"
            );
          }}
        >
          <LinkedIn />
        </Button>
        <Button
          onClick={() => {
            window.open("https://twitter.com/jeetu241295", "_blank");
          }}
        >
          <Twitter />
        </Button>
      </Grid> */}
    </Grid>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  navs: PropTypes.array.isRequired
};
export default withStyles(styles)(Footer);
