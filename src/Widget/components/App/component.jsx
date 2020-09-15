import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Rating from '__SHARED__/Rating';
import Loading from '__SHARED__/Loading';
import Navbar from '__SHARED__/Navbar';
import Footer from '__SHARED__/Footer';
import MessageModal from './MessageModal';

const HomePage = lazy(() => import('../HomePage'));
const AboutPage = lazy(() => import('../AboutPage'));
const ContactPage = lazy(() => import('../ContactPage'));
const ProjectsPage = lazy(() => import('../ProjectsPage'));
const NoPage = lazy(() => import('./NoPage'));

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
  const {
    navs,
    toggleSuggestionDialog,
    showRating,
    // loader,
    ratingValue,
    setRatingValue
  } = props;
  const classes = styles();

  return (
    <Router>
      <Suspense fallback={<Loading open />}>
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
        {showRating && (
          <React.Fragment>
            <Grid className={classes.ratingWrap}>
              Please leave a rating
              <Rating
                name="leave-rating"
                value={ratingValue}
                size="medium"
                precision={0.2}
                onChange={(e, value1) => {
                  setRatingValue(value1);
                  toggleSuggestionDialog(true);
                }}
              />
            </Grid>
            <MessageModal {...props} />
          </React.Fragment>
        )}
      </Suspense>
      {/* <Loading open={loader} /> */}
    </Router>
  );
};

App.propTypes = {
  // loader: PropTypes.bool.isRequired,
  navs: PropTypes.array.isRequired,
  ratingValue: PropTypes.number.isRequired,
  setRatingValue: PropTypes.func.isRequired,
  showRating: PropTypes.bool.isRequired,
  toggleSuggestionDialog: PropTypes.func.isRequired
};
App.defaultProps = {};

export default App;
