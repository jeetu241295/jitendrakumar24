import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FacebookSVG from './facebook2.svg';
import styles from '../styles.css';

const Facebook = ({ classes }) => {
  return <FacebookSVG className={classes.whiteColor} />;
};
Facebook.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Facebook);
