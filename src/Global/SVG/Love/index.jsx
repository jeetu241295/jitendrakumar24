import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LoveSVG from './heart.svg';
import styles from '../styles.css';

const Love = ({ classes }) => {
  return <LoveSVG className={classes.primaryColor} width={20} height={20} />;
};
Love.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Love);
