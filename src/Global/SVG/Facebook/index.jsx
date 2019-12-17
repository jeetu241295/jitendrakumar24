import React from 'react';
import FacebookSVG from './facebook2.svg';
import styles from '../styles.css';

const Facebook = () => {
  const classes = styles();
  return <FacebookSVG className={classes.whiteColor} />;
};
Facebook.propTypes = {};
export default Facebook;
