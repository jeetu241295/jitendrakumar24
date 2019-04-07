import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SchoolSVG from './school.svg';
import styles from '../styles.css';

const School = ({ classes }) => {
  return <SchoolSVG className={classes.calenderColor} height={16} width={16} />;
};
School.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(School);
