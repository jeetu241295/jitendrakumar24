import React from 'react';
import PhoneSVG from './phone.svg';
import styles from '../styles.css';

const Phone = () => {
  const classes = styles();
  return <PhoneSVG className={classes.whiteColor} height={16} width={16} />;
};
Phone.propTypes = {};
export default Phone;
