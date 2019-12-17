import React from 'react';
import TwitterSVG from './twitter.svg';
import styles from '../styles.css';

const Twitter = () => {
  const classes = styles();
  return <TwitterSVG className={classes.whiteColor} />;
};
Twitter.propTypes = {};
export default Twitter;
