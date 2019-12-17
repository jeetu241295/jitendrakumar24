import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = makeStyles(() => ({
  avatar: {
    margin: 10,
    width: ({ big, small }) => {
      if (big) return 400;
      if (small) return 60;
      return 150;
    },
    height: ({ big, small }) => {
      if (big) return 300;
      if (small) return 60;
      return 150;
    }
  }
}));

const ImageAvatar = props => {
  const { alt, src, className } = props;
  const classes = styles(props);
  return (
    <Avatar alt={alt} src={src} className={`${classes.avatar} ${className}`} />
  );
};

ImageAvatar.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired
};
ImageAvatar.defaultProps = {
  className: ''
};

export default ImageAvatar;
