import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GithubSVG from './github.svg';
import styles from '../styles.css';

const Github = props => {
  const { className } = props;
  const classes = styles();
  return <GithubSVG className={classNames(className, classes.whiteColor)} />;
};

Github.propTypes = {
  className: PropTypes.string
};

Github.defaultProps = {
  className: null
};

export default Github;
