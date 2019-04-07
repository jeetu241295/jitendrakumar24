import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';
import Experience from './Experience';
import Motto from './Motto';
import Project from './Project';

const styles = () => ({});

const App = props => {
  const { skills, motto, about, history } = props;
  return (
    <Grid container>
      <Home />
      <About skills={skills} about={about} history={history} />
      <Motto motto={motto} />
      <Experience {...props} />
      <Project />
      <Gallery {...props} />
      <Contact />
    </Grid>
  );
};

App.propTypes = {
  skills: PropTypes.array.isRequired,
  about: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  motto: PropTypes.string.isRequired,
};
App.defaultProps = {};

export default withStyles(styles)(App);
