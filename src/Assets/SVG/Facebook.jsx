import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const FacebookIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon
      classes={{ root: classNames(classes.icon, className) }}
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z" />
    </SvgIcon>
  );
};

FacebookIcon.propTypes = { className: PropTypes.string };
FacebookIcon.defaultProps = { className: null };

export default FacebookIcon;