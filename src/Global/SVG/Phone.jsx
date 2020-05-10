import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const PhoneIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon
      classes={{ root: classNames(classes.icon, className) }}
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z" />
    </SvgIcon>
  );
};

PhoneIcon.propTypes = { className: PropTypes.string };
PhoneIcon.defaultProps = { className: null };

export default PhoneIcon;
