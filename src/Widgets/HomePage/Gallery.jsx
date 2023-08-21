import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { images } from '../_helpers/constants';

const galleryItem = index => {
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
};

const styles = {
  memories: {
    display: 'grid',
    gridColumn: 'flex-start/flex-end',
    gridTemplateColumns: 'repeat(8,1fr)',
    gridTemplateRows: 'repeat(7,5vw)',
    gridGap: { xs: '1rem', sm: '0.5rem', md: '1.5rem' }
  },
  title: {
    backgroundImage: `linear-gradient(to left bottom,primary.main,common.white)`,
    fontSize: '4rem',
    textTransform: 'uppercase',
    fontWeight: 900,
    marginBottom: '2rem',
    WebkitBackgroundClip: 'text',
    color: 'colors.transparent'
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
    padding: { xs: '1.5rem', sm: '3rem', md: '7rem' },
    paddingTop: '2rem'
  }
};

const Gallery = () => {
  return (
    <Grid container sx={styles.gallery}>
      <Grid>
        <Typography sx={styles.title} component="h2" variant="h2">
          My Memories
        </Typography>
      </Grid>
      <Grid sx={styles.memories}>
        {images.map((image, index) => {
          const style = galleryItem(index);
          return (
            <Grid sx={style} key={image.id}>
              <img src={image.src} alt={image.title} style={styles.gridImage} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

Gallery.propTypes = {};
Gallery.defaultProps = {};

export default Gallery;
