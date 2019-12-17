import React from 'react';
import WebSVG from './web-svg.svg';
import styles from '../styles.css';

const Web = () => {
  const classes = styles();
  return <WebSVG className={classes.whiteColor} height={16} width={16} />;
};
Web.propTypes = {};
export default Web;
