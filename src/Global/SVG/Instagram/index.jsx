import React from 'react';
import InstagramSVG from './instagram.svg';
import styles from '../styles.css';

const Instagram = () => {
  const classes = styles();
  return <InstagramSVG className={classes.whiteColor} />;
};
Instagram.propTypes = {};
export default Instagram;
