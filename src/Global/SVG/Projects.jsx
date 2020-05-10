import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const ProjectsIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M18.984 17.016v-1.031q0-0.891-1.383-1.43t-2.602-0.539-2.602 0.539-1.383 1.43v1.031h7.969zM15 9q-0.797 0-1.406 0.609t-0.609 1.406 0.609 1.383 1.406 0.586 1.406-0.586 0.609-1.383-0.609-1.406-1.406-0.609zM20.016 6q0.797 0 1.383 0.609t0.586 1.406v9.984q0 0.797-0.586 1.406t-1.383 0.609h-16.031q-0.797 0-1.383-0.609t-0.586-1.406v-12q0-0.797 0.586-1.406t1.383-0.609h6l2.016 2.016h8.016z" />
    </SvgIcon>
  );
};

ProjectsIcon.propTypes = { className: PropTypes.string };
ProjectsIcon.defaultProps = { className: null };

export default ProjectsIcon;
