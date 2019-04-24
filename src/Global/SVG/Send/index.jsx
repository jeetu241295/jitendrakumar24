import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SendSVG from './send.svg';
import styles from '../styles.css';

const Send = ({ classes }) => {
  return <SendSVG className={classes.whiteColor} height={16} width={16} />;
};
Send.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Send);
