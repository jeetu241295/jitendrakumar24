import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TwitterSVG from './twitter.svg';
import styles from '../styles.css';

const Twitter = ({ classes }) => {
  return <TwitterSVG className={classes.whiteColor} />;
};
Twitter.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Twitter);
