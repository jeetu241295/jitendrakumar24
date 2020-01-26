import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import HomePage from '../HomePage';
// import AboutPage from '../AboutPage';
import ContactPage from '../ContactPage';
import ProjectsPage from '../ProjectsPage';
import NoPage from './NoPage';

const App = props => {
  const { navs } = props;
  return (
    <Router>
      <Navbar navs={navs} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        {/* <Route path="/about" component={AboutPage} /> */}
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NoPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

App.propTypes = {
  navs: PropTypes.array.isRequired
};
App.defaultProps = {};

export default App;
