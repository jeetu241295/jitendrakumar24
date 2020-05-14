import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const styles = makeStyles(() => ({
  iconButton: {}
}));

const IconButtonJK = props => {
  const { className, children, onClick, ...others } = props;
  const classes = styles();
  return (
    <IconButton
      className={classNames(classes.iconButton, className)}
      disableFocusRipple
      onClick={onClick}
      {...others}
    >
      {children}
    </IconButton>
  );
};

IconButtonJK.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

IconButtonJK.defaultProps = {
  className: null
};

export default IconButtonJK;
