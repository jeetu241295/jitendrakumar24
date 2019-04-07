import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import WebSVG from './web-svg.svg';
import styles from '../styles.css';

const Web = ({ classes }) => {
  return <WebSVG className={classes.whiteColor} height={16} width={16} />;
};
Web.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Web);
