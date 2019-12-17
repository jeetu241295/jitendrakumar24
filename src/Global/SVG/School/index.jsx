import React from 'react';
import SchoolSVG from './school.svg';
import styles from '../styles.css';

const School = () => {
  const classes = styles();
  return <SchoolSVG className={classes.calenderClor} height={24} width={24} />;
};
School.propTypes = {};
export default School;
