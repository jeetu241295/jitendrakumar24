import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CalenderSVG from './calender.svg';
import styles from '../styles.css';

const Calender = ({ classes, className }) => {
  return (
    <CalenderSVG
      className={classNames(classes.calenderColor, className)}
      height={16}
      width={16}
    />
  );
};
Calender.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired
};
export default withStyles(styles)(Calender);
