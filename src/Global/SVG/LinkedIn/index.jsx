import React from 'react';
import LinkedInSVG from './linkedin.svg';
import styles from '../styles.css';

const LinkedIn = () => {
  const classes = styles();
  return <LinkedInSVG className={classes.whiteColor} />;
};
LinkedIn.propTypes = {};
export default LinkedIn;
