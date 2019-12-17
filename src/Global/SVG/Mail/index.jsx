import React from 'react';
import MailSVG from './envelop.svg';
import styles from '../styles.css';

const Mail = () => {
  const classes = styles();
  return <MailSVG className={classes.whiteColor} height={16} width={16} />;
};
Mail.propTypes = {};
export default Mail;
