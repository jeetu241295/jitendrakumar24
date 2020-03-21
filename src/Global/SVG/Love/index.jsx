import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LoveSVG from './heart.svg';
import styles from '../styles.css';

const Love = props => {
  const { className } = props;
  const classes = styles();
  return (
    <LoveSVG
      className={classNames(classes.primaryColor, className)}
      width={20}
      height={20}
    />
  );
};
Love.propTypes = {
  className: PropTypes.string
};
Love.defaultProps = {
  className: ''
};
export default Love;
