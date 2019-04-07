import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinkedInSVG from './linkedin.svg';
import styles from '../styles.css';

const LinkedIn = ({ classes }) => {
  return <LinkedInSVG className={classes.whiteColor} />;
};
LinkedIn.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LinkedIn);
