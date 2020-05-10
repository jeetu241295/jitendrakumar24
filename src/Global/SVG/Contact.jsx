import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const ContactIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M17.016 17.016v-1.5q0-1.125-1.711-1.828t-3.305-0.703-3.305 0.703-1.711 1.828v1.5h10.031zM12 6.75q-0.938 0-1.594 0.656t-0.656 1.594 0.656 1.594 1.594 0.656 1.594-0.656 0.656-1.594-0.656-1.594-1.594-0.656zM20.016 3.984q0.797 0 1.383 0.609t0.586 1.406v12q0 0.797-0.586 1.406t-1.383 0.609h-16.031q-0.797 0-1.383-0.609t-0.586-1.406v-12q0-0.797 0.586-1.406t1.383-0.609h16.031zM3.984 24v-2.016h16.031v2.016h-16.031zM20.016 0v2.016h-16.031v-2.016h16.031z" />
    </SvgIcon>
  );
};

ContactIcon.propTypes = { className: PropTypes.string };
ContactIcon.defaultProps = { className: null };

export default ContactIcon;
