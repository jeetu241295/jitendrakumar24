import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const CloseIcon = props => {
  const classes = styles(props);
  return (
    <SvgIcon className={classes.icon} {...props}>
      <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z" />
    </SvgIcon>
  );
};
CloseIcon.propTypes = {};
export default CloseIcon;
