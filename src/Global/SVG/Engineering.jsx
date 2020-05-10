import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const EngineeringIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon
      classes={{ root: classNames(classes.icon, className) }}
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M0 2v20h32v-20h-32zM30 20h-28v-16h28v16zM21 24h-10l-1 4-2 2h16l-2-2z" />
    </SvgIcon>
  );
};

EngineeringIcon.propTypes = { className: PropTypes.string };
EngineeringIcon.defaultProps = { className: null };

export default EngineeringIcon;
