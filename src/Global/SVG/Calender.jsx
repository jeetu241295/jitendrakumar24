import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const CalenderIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon
      classes={{ root: classNames(classes.icon, className) }}
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M10 12h4v4h-4zM16 12h4v4h-4zM22 12h4v4h-4zM4 24h4v4h-4zM10 24h4v4h-4zM16 24h4v4h-4zM10 18h4v4h-4zM16 18h4v4h-4zM22 18h4v4h-4zM4 18h4v4h-4zM26 0v2h-4v-2h-14v2h-4v-2h-4v32h30v-32h-4zM28 30h-26v-22h26v22z" />
    </SvgIcon>
  );
};

CalenderIcon.propTypes = { className: PropTypes.string };
CalenderIcon.defaultProps = { className: null };

export default CalenderIcon;
