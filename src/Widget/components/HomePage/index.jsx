import React from 'react';
import Grid from '@mui/material/Grid';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Experience from './Experience';
import Motto from './Motto';

const App = () => {
  return (
    <Grid container>
      <Home />
      <About />
      <Motto />
      <Experience />
      <Gallery />
    </Grid>
  );
};

App.propTypes = {};
App.defaultProps = {};

export default App;
