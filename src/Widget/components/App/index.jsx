import React, { Suspense, lazy } from 'react';
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rating from '__SHARED__/Rating';
import Loading from '__SHARED__/Loading';
import Navbar from '__SHARED__/Navbar';
import Footer from '__SHARED__/Footer';
import { useSelector } from 'react-redux';
import MessageModal from './MessageModal';
import { navs } from '../../constants';
import {
  toggleSuggestionDialog,
  setRatingValue
} from '../../personalWebsiteSlice';

const HomePage = lazy(() => import('../HomePage'));
const AboutPage = lazy(() => import('../AboutPage'));
const ContactPage = lazy(() => import('../ContactPage'));
const ProjectsPage = lazy(() => import('../Projects'));
const NoPage = lazy(() => import('./NoPage'));

const styles = {
  ratingWrap: {
    backgroundColor: 'colors.mainAction',
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
const App = () => {
  const ratingValue = useSelector(state => state.personalWebsite.ratingValue);
  const showRating = useSelector(state => state.personalWebsite.showRating);

  return (
    <Router>
      <Suspense fallback={<Loading open />}>
        <Navbar navs={navs} />
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/home" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/projects" Component={ProjectsPage} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="*" Component={NoPage} />
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
            <MessageModal />
          </React.Fragment>
        )}
      </Suspense>
    </Router>
  );
};

App.propTypes = {};
App.defaultProps = {};

export default App;
