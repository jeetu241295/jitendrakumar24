import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CollegeSVG from './college.svg';
import styles from '../styles.css';

const College = ({ classes }) => {
  return (
    <CollegeSVG className={classes.calenderColor} height={16} width={16} />
  );
};
College.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(College);
