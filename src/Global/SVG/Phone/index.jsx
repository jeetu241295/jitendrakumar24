import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PhoneSVG from './phone.svg';
import styles from '../styles.css';

const Phone = ({ classes }) => {
  return <PhoneSVG className={classes.whiteColor} height={16} width={16} />;
};
Phone.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Phone);
