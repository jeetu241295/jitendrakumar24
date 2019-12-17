import React from 'react';
import EngineeringSVG from './engineering.svg';
import styles from '../styles.css';

const Engineering = () => {
  const classes = styles();
  return (
    <EngineeringSVG className={classes.calenderColr} height={24} width={24} />
  );
};
Engineering.propTypes = {};
export default Engineering;
