import React from 'react';
import LoveSVG from './heart.svg';
import styles from '../styles.css';

const Love = () => {
  const classes = styles();
  return <LoveSVG className={classes.primaryColor} width={20} height={20} />;
};
Love.propTypes = {};
export default Love;
