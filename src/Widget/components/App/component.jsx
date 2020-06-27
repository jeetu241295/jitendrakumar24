import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '__SHARED__/Navbar';
import Footer from '__SHARED__/Footer';
import Rating from '__SHARED__/Rating';
import Loading from '__SHARED__/Loading';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import ContactPage from '../ContactPage';
import ProjectsPage from '../ProjectsPage';
import NoPage from './NoPage';
import MessageModal from './MessageModal';

const styles = makeStyles(theme => ({
  ratingWrap: {
    backgroundColor: theme.colors.mainAction,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.5rem',
    fontSize: '1.5rem'
  },
  leaveRating: {
    marginLeft: '1rem'
  }
}));
const App = props => {
  const { navs, toggleSuggestionDialog, showRating, loader } = props;
  const [value, setValue] = useState(0);
  const classes = styles();

  return (
    <Router>
      <Navbar navs={navs} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NoPage} />
      </Switch>
      <Footer />
      <Loading open={loader} />
      {showRating && (
        <React.Fragment>
          <Grid className={classes.ratingWrap}>
            Please leave a rating
            <Rating
              name="leave-rating"
              value={value}
              size="medium"
              precision={0.2}
              onChange={(e, value1) => {
                setValue(value1);
                toggleSuggestionDialog(true);
              }}
            />
          </Grid>
          <MessageModal ratingValue={value} {...props} />
        </React.Fragment>
      )}
    </Router>
  );
};

App.propTypes = {
  loader: PropTypes.bool.isRequired,
  navs: PropTypes.array.isRequired,
  showRating: PropTypes.bool.isRequired,
  toggleSuggestionDialog: PropTypes.func.isRequired
};
App.defaultProps = {};

export default App;
