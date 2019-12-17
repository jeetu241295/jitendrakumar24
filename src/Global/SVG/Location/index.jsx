import React from 'react';
import classNames from 'classnames';
import LocationSVG from './location2.svg';
import styles from '../styles.css';

const Location = () => {
  const classes = styles();
  return (
    <LocationSVG className={classNames(classes.whiteColor, classes.location)} />
  );
};
Location.propTypes = {};
export default Location;
