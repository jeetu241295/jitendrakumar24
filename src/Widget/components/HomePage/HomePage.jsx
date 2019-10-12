import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Experience from './Experience';
import Motto from './Motto';

const styles = () => ({});

const App = props => {
  const { skills, motto, about, history, downloadCV } = props;
  return (
    <Grid container>
      <Home />
      <About
        skills={skills}
        about={about}
        history={history}
        downloadCV={downloadCV}
      />
      <Motto motto={motto} />
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

export default withStyles(styles)(App);
