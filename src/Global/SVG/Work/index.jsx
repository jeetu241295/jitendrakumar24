import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import WorkSVG from './work.svg';
import styles from '../styles.css';

const Work = ({ classes }) => {
  return <WorkSVG className={classes.calenderColor} height={16} width={16} />;
};
Work.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Work);
