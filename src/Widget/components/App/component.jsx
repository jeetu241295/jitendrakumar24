import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';

const styles = () => ({});

const App = props => {
  const { navs } = props;
  return (
    <Router>
      <Navbar navs={navs} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      <Footer navs={navs} />
    </Router>
  );
};

App.propTypes = {
  navs: PropTypes.array.isRequired,
};
App.defaultProps = {};

export default withStyles(styles)(App);
