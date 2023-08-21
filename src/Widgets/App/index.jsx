import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Rating from '__SHARED__/Rating';
import Loading from '__SHARED__/Loading';
import Navbar from '__SHARED__/Navbar';
import Footer from '__SHARED__/Footer';
import MessageModal from './MessageModal';
import { navs } from '../_helpers/constants';

const HomePage = lazy(() => import('../HomePage'));
const AboutPage = lazy(() => import('../AboutPage'));
const ContactPage = lazy(() => import('../ContactPage'));
const ProjectsPage = lazy(() => import('../ProjectsPage'));
const NoPage = lazy(() => import('./NoPage'));

const styles = {
  ratingWrap: {
    backgroundColor: 'primary.main',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.5rem',
    fontSize: '1.5rem'
  },
  leaveRating: {
    marginLeft: '1rem'
  }
};

const App = props => {
  const { toggleSuggestionDialog, showRating, ratingValue, setRatingValue } =
    props;

  return (
    <Router>
      <Suspense fallback={<Loading open />}>
        <Navbar navs={navs} />
        <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
        {showRating && (
          <React.Fragment>
            <Grid sx={styles.ratingWrap}>
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
    </Router>
  );
};

App.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  setRatingValue: PropTypes.func.isRequired,
  showRating: PropTypes.bool.isRequired,
  toggleSuggestionDialog: PropTypes.func.isRequired
};
App.defaultProps = {};

export default App;
