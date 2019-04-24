import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import EngineeringSVG from './engineering.svg';
import styles from '../styles.css';

const Engineering = ({ classes }) => {
  return (
    <EngineeringSVG className={classes.calenderColr} height={24} width={24} />
  );
};
Engineering.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Engineering);
