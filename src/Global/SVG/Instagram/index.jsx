import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InstagramSVG from './instagram.svg';
import styles from '../styles.css';

const Instagram = ({ classes }) => {
  return <InstagramSVG className={classes.whiteColor} />;
};
Instagram.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Instagram);
