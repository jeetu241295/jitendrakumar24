import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Normal from '__SHARED__/Fonts/Normal';
import Rating from '__SHARED__/Rating';

const styles = {
  compositionWrap: {
    position: 'relative',
    padding: '2rem',
    height: { xs: 200, md: 'auto' }
  },
  disablePadding: { p: 0 },
  image: {
    position: 'absolute',
    width: { xs: '33.33%', md: '40%' },
    height: { xs: 75, sm: 100, md: 150 },
    boxShadow: { xs: 6, md: 8 },
    borderRadius: 2,
    outlineOffset: '1.5rem',
    '&:hover': {
      transform: 'scale(1.05) translateY(-0.5rem)',
      boxShadow: 4,
      zIndex: 99990,
      outline: `1.5rem solid`,
      outlineColor: theme => theme.palette.colors.mainAction
    },
    '&:hover &__photo:not(:hover)': {
      transform: 'scale(0.95)'
    }
  },
  compositionImage1: {
    left: { xs: '3rem', sm: '5rem', md: 100 },
    top: { xs: '4rem', md: 50 },
    zIndex: 5
  },
  compositionImage2: {
    right: { xs: '3rem', sm: '5rem', md: 50, lg: 100 },
    top: { xs: '4rem', md: 75, lg: 75 },
    zIndex: 5
  },
  compositionImage3: {
    left: { lg: 150 },
    top: { sm: 50, md: 100, lg: 125 },
    zIndex: 5
  },
  content: {
    textAlign: 'justify'
  },
  ratings: {
    margin: '2rem 0'
  },
  ratingText: {
    textAlign: 'center'
  },
  tripTitle: {
    color: 'colors.heading',
    fontWeight: 'bold',
    fontFamily: 'cursive',
    fontStyle: 'italic',
    marginBottom: '2rem'
  },
  placesCovered: {
    marginTop: '2rem',
    fontStyle: 'italic',
    color: 'colors.primary'
  }
};

export const renderDetails = (item, isOffice = false) => {
  const ratings = [
    { displayText: 'Work life balance', key: 'workLifeBalance' },
    { displayText: 'Ambience', key: 'ambience' },
    { displayText: 'Work satisfaction', key: 'workSatisfaction' },
    { displayText: 'Recommend for friend', key: 'recommendForFriend' }
  ];
  return (
    <Grid item md={6} xs={12}>
      <Grid>
        <Typography sx={styles.tripTitle} variant="h6" component="h3">
          {isOffice ? item.title : `Trip ${item.id}:-`}
        </Typography>
      </Grid>
      <Normal sx={styles.content}>&emsp; {item.content}</Normal>
      {!isOffice && (
        <Normal sx={styles.placesCovered}>
          Places Covered: {item.placesCovered}
        </Normal>
      )}
      <Grid container sx={styles.ratings} spacing={2}>
        {isOffice &&
          ratings.map((rating, index) => (
            <Grid item xs={6} sx={styles.ratingText} key={rating.displayText}>
              <Grid>{rating.displayText}</Grid>
              <Rating
                precision={0.5}
                name={rating.displayText + index}
                value={item[rating.key]}
                readOnly
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export const renderImages = (item, disablePadding) => {
  return (
    <Grid
      sx={[styles.compositionWrap, disablePadding && styles.disablePadding]}
      item
      md={6}
      xs={12}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        component="img"
        alt="image_1"
        sx={[styles.compositionImage1, styles.image]}
        src={item.image1}
      />
      <Grid
        component="img"
        alt="image_2"
        sx={[styles.compositionImage2, styles.image]}
        src={item.image2}
      />
      <Grid
        component="img"
        alt="image_3"
        sx={[styles.compositionImage3, styles.image]}
        src={item.image3}
      />
    </Grid>
  );
};
