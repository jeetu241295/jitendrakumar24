import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Experience from './Experience';
import Motto from './Motto';

const App = props => {
  const { downloadCV } = props;
  return (
    <Grid container>
      <Home />
      <About downloadCV={downloadCV} />
      <Motto />
      <Experience {...props} />
      <Gallery {...props} />
    </Grid>
  );
};

App.propTypes = {
  skills: PropTypes.array.isRequired,
  downloadCV: PropTypes.func.isRequired,
  about: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  motto: PropTypes.string.isRequired
};
App.defaultProps = {};

export default App;
