import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

const Picture = props => {
  const { images, pictureClass, imageClass } = props;
  return (
    <Grid component="picture" sx={classNames(pictureClass)}>
      {images.map((image, index) => (
        <Grid
          component="source"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          type={image.type}
          srcSet={image.src}
        />
      ))}
      <Grid
        component={'img'}
        src={images[images.length - 1].src}
        alt={images[images.length - 1].src}
        sx={classNames(imageClass)}
      />
    </Grid>
  );
};

Picture.propTypes = {
  imageClass: PropTypes.string,
  images: PropTypes.array.isRequired,
  pictureClass: PropTypes.string
};

Picture.defaultProps = {
  imageClass: null,
  pictureClass: null
};

export default Picture;
