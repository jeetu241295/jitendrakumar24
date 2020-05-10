import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const ExpandMoreIcon = props => {
  const classes = styles(props);
  return (
    <SvgIcon className={classes.icon} {...props}>
      <path d="M16.594 8.578l1.406 1.406-6 6-6-6 1.406-1.406 4.594 4.594z" />
    </SvgIcon>
  );
};

ExpandMoreIcon.propTypes = {};

export default ExpandMoreIcon;
