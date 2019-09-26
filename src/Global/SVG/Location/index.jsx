import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import LocationSVG from './location2.svg';
import styles from '../styles.css';

const Location = ({ classes }) => {
  return (
    <LocationSVG className={classNames(classes.whiteColor, classes.location)} />
  );
};
Location.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Location);
