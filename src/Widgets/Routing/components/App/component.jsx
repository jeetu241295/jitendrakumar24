import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '__SHARED__/Loading';
import { paths } from '__GLOBAL__/constants';
import Header from './Header';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('__WIDGETS__/Home/components/App'));
const Register = lazy(() => import('__WIDGETS__/Register/components/App'));
const NoPage = lazy(() => import('./NoPage'));

const Routing = props => {
  const { isLoggedIn, unmount } = props;
  useEffect(() => {
    return () => unmount();
  }, [unmount]);

  return (
    <Router>
      <Suspense fallback={<Loading open />}>
        <Header {...props} />
        <Switch>
          <Route path={paths.home} component={HomePage} />
          <Route path="/" exact>
            <Redirect to={paths.home} />
          </Route>
          <PublicRoute
            path={paths.register}
            component={Register}
            isLoggedIn={isLoggedIn}
          />
          <Route component={NoPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

Routing.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  unmount: PropTypes.func.isRequired
};
Routing.defaultProps = {};

export default Routing;
