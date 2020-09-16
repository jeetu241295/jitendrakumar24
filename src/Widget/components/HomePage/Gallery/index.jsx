import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const imageStles = makeStyles(() => ({
  galleryItem: index => {
    const defaultStyles = { margin: 0 };
    if (index + 1 === 1)
      return {
        gridRow: '1 / span 2',
        gridColumn: '1 / span 2',
        ...defaultStyles
      };
    if (index + 1 === 2)
      return {
        gridRow: '1 / span 3',
        gridColumn: '3 / span 3',
        ...defaultStyles
      };
    if (index + 1 === 3)
      return {
        gridRow: '1 / span 2'
      };
    if (index + 1 === 4)
      return {
        gridRow: '1 / span 2',
        gridColumn: '7 / span 2',
        ...defaultStyles
      };
    if (index + 1 === 5)
      return {
        gridRow: '3 / span 3',
        gridColumn: '1 / span 2',
        ...defaultStyles
      };
    if (index + 1 === 6)
      return {
        gridRow: '4 / span 2',
        gridColumn: '3 / span 2',
        ...defaultStyles
      };
    if (index + 1 === 7)
      return {
        gridRow: '4 / span 1',
        gridColumn: '5 / span 1',
        ...defaultStyles
      };
    if (index + 1 === 8)
      return {
        gridRow: '3 / span 2',
        gridColumn: '6 / span 2',
        ...defaultStyles
      };
    if (index + 1 === 9)
      return {
        gridRow: '3 / span 3',
        gridColumn: '8 / span 1',
        ...defaultStyles
      };
    if (index + 1 === 10)
      return {
        gridRow: '6 / span 2',
        gridColumn: '1 / span 1',
        ...defaultStyles
      };
    if (index + 1 === 11)
      return {
        gridRow: '6 / span 2',
        gridColumn: '2 / span 2',
        ...defaultStyles
      };
    if (index + 1 === 12)
      return {
        gridRow: '6 / span 2',
        gridColumn: '4 / span 1',
        ...defaultStyles
      };
    if (index + 1 === 13)
      return {
        gridRow: '5 / span 3',
        gridColumn: '5 / span 3',
        ...defaultStyles
      };
    return {
      gridRow: '6 / span 2',
      gridColumn: '8 / span 1',
      ...defaultStyles
    };
  }
}));

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
    backgroundImage: `linear-gradient(to left bottom,${theme.colors.primary},${theme.colors.white})`,
    fontSize: '4rem',
    textTransform: 'uppercase',
    fontWeight: 900,
    marginBottom: '2rem',
    WebkitBackgroundClip: 'text',
    color: theme.colors.transparent
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
  const classes = styles(props);
  return (
    <Grid container className={classes.gallery}>
      <Grid>
        <Typography className={classes.title} component="h2" variant="h2">
          My Memories
        </Typography>
      </Grid>
      <Grid className={classes.memories}>
        {images.map((image, index) => {
          const imageClasses = imageStles(index);
          return (
            <Grid className={imageClasses.galleryItem} key={image.id}>
              <img
                src={image.src}
                alt={image.title}
                className={classes.gridImage}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};
Gallery.defaultProps = {};

export default Gallery;
