import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MailSVG from './envelop.svg';
import styles from '../styles.css';

const Mail = ({ classes }) => {
  return <MailSVG className={classes.whiteColor} height={16} width={16} />;
};
Mail.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Mail);
