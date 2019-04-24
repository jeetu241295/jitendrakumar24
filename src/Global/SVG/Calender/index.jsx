import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CalenderSVG from './calender.svg';
import styles from '../styles.css';

const Calender = ({ classes }) => {
  return (
    <CalenderSVG className={classes.calenderColor} height={16} width={16} />
  );
};
Calender.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Calender);
