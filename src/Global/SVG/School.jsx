import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const SchoolIcon = props => {
  const classes = styles(props);
  return (
    <SvgIcon className={classes.icon} {...props}>
      <path d="M12 3l11.016 6v8.016h-2.016v-6.938l-9 4.922-11.016-6zM5.016 13.172l6.984 3.844 6.984-3.844v4.031l-6.984 3.797-6.984-3.797v-4.031z" />
    </SvgIcon>
  );
};
SchoolIcon.propTypes = {};
export default SchoolIcon;
