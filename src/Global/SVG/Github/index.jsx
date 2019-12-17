import React from 'react';
import GithubSVG from './github.svg';
import styles from '../styles.css';

const Github = () => {
  const classes = styles();
  return <GithubSVG className={classes.whiteColor} />;
};
Github.propTypes = {};
export default Github;
