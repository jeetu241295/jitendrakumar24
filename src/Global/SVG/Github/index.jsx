import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GithubSVG from './github.svg';
import styles from '../styles.css';

const Github = ({ classes }) => {
  return <GithubSVG className={classes.whiteColor} />;
};
Github.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Github);
