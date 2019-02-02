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

const styles = () => ({});

const App = props => {
  const { navs, images } = props;
  return (
    <Grid container>
      <Navbar navs={navs} />
      <Home />
      <About />
      <Gallery images={images} {...props} />
      <Contact />
      <Footer navs={navs} />
    </Grid>
  );
};

App.propTypes = {
  // classes: PropTypes.object.isRequired,
  navs: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired
};
App.defaultProps = {};

export default withStyles(styles)(App);
