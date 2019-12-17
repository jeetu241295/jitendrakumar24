import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DialogJK from '../../../../Components/Dialog';

const styles = makeStyles(() => ({
  gridImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  }
}));

const ImageClick = props => {
  const { image, imageOpen, index, dialogOpen } = props;
  const classes = styles();
  return (
    <Grid>
      {image && (
        <DialogJK
          title={image.title}
          open={imageOpen}
          onClose={() => dialogOpen()}
          closeButton
        >
          <img
            // eslint-disable-next-line
            src={require(`../../../../static/images/gal-${index + 1}.jpg`)}
            alt={image.title}
            className={classes.gridImage}
          />
        </DialogJK>
      )}
    </Grid>
  );
};
ImageClick.propTypes = {
  image: PropTypes.object,
  imageOpen: PropTypes.bool.isRequired,
  dialogOpen: PropTypes.func.isRequired,
  index: PropTypes.number
};
ImageClick.defaultProps = {
  image: null,
  index: -1
};
export default ImageClick;
