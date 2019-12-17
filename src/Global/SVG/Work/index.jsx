import React from 'react';
import WorkSVG from './work.svg';
import styles from '../styles.css';

const Work = () => {
  const classes = styles();
  return <WorkSVG className={classes.calenderCoor} height={24} width={24} />;
};
Work.propTypes = {};
export default Work;
