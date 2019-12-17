import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CalenderSVG from './calender.svg';
import styles from '../styles.css';

const Calender = ({ className }) => {
  const classes = styles();
  return (
    <CalenderSVG
      className={classNames(classes.calenderColor, className)}
      height={16}
      width={16}
    />
  );
};
Calender.propTypes = {
  className: PropTypes.string.isRequired
};
export default Calender;
