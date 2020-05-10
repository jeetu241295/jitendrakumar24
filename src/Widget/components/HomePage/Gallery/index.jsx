import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './style.css';

const styles = makeStyles(theme => ({
  memories: {
    display: 'grid',
    gridColumn: 'flex-start/flex-end',
    gridTemplateColumns: 'repeat(8,1fr)',
    gridTemplateRows: 'repeat(7,5vw)',
    gridGap: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      gridGap: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      gridGap: '0.5rem'
    }
  },
  title: {
    backgroundImage: `linear-gradient(to left bottom,${theme.colors.primary},${
      theme.colors.white
    })`,
    fontSize: '4rem',
    textTransform: 'uppercase',
    fontWeight: 900,
    marginBottom: '2rem',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  },
  gridImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  gallery: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7rem',
    paddingTop: '2rem',
    [theme.breakpoints.down('md')]: {
      padding: '3rem'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1.5rem'
    }
  }
}));

const Gallery = ({ ...props }) => {
  const { images } = props;
  const classes = styles();
  return (
    <Grid container className={classes.gallery}>
      <Grid>
        <Typography className={classes.title} component="h2" variant="h2">
          My Memories
        </Typography>
      </Grid>
      <Grid className={classes.memories}>
        {images.map((image, index) => (
          <Grid
            className={`gallery__item gallery__item${index + 1}`}
            key={image.id}
          >
            <img
              src={image.src}
              alt={image.title}
              className={classes.gridImage}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};
Gallery.defaultProps = {};

export default Gallery;
