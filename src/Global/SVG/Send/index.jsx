import React from 'react';
import SendSVG from './send.svg';
import styles from '../styles.css';

const Send = () => {
  const classes = styles();
  return <SendSVG className={classes.whiteColor} height={16} width={16} />;
};
Send.propTypes = {};
export default Send;
