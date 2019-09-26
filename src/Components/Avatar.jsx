import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  mediumAvatar: {
    margin: 10,
    width: 150,
    height: 150
  },
  smallAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  bigAvatar: {
    margin: 10,
    width: 400,
    height: 300
  }
};

const ImageAvatar = props => {
  const { classes, big, small, medium, alt, src, className } = props;
  return (
    <Avatar
      alt={alt}
      src={src}
      className={classNames(
        {
          [classes.bigAvatar]: big,
          [classes.mediumAvatar]: medium,
          [classes.smallAvatar]: small
        },
        className
      )}
    />
  );
};

ImageAvatar.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  big: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool
};
ImageAvatar.defaultProps = {
  className: '',
  big: false,
  small: false,
  medium: false
};

export default withStyles(styles)(ImageAvatar);
