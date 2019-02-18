import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Navbar from "../../../Components/Navbar";
import Home from "../Home";
import Footer from "../Footer";
import Contact from "../Contact";
import About from "../About";
import Gallery from "../Gallery";
import Experience from "../Experience";

const styles = () => ({});

const App = props => {
  const { navs, skills } = props;
  return (
    <Grid container>
      <Navbar navs={navs} />
      <Home />
      <About skills={skills} />
      <Experience {...props} />
      <Gallery {...props} />
      <Contact />
      <Footer navs={navs} />
    </Grid>
  );
};

App.propTypes = {
  navs: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired
};
App.defaultProps = {};

export default withStyles(styles)(App);
