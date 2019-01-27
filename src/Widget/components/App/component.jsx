import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Navbar from "../../../Components/Navbar";
import Home from "../Home";
import Footer from "../Footer";
import Contact from "../Contact";

const styles = theme => ({});

const App = props => {
  const { navs } = props;
  return (
    <Grid container>
      <Navbar navs={navs} />
      <Home />
      <Contact />
      <Footer navs={navs} />
    </Grid>
  );
};

App.propType = {
  class: PropTypes.object.isRequired,
  navs: PropTypes.array.isRequired
};
App.defaultProps = {};

export default withStyles(styles)(App);
