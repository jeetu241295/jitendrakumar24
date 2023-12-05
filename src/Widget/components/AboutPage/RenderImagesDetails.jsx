import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Normal from '__SHARED__/Fonts/Normal';
import Rating from '__SHARED__/Rating';

const styles = {
  compositionWrap: {
    padding: '2rem'
  },
  disablePadding: { p: 0 },
  composition: {
    position: 'relative',
    minHeight: { xs: '20rem', sm: '25rem', md: '30rem', lg: '35rem' },
    top: { md: '12.5%' },
    left: { md: 40 },
    '& img': {
      width: { xs: '33.33%', sm: '40%' },
      boxShadow: {
        xs: 6,
        sm: 8
      },
      borderRadius: 2,
      position: { xs: 'relative', sm: 'absolute' },
      outlineOffset: '1.5rem',
      float: { xs: 'left', sm: 'none' },
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
    }
  },
  compositionImage1: {
    left: { xs: '6rem', lg: '4rem' },
    top: { xs: '3rem', lg: '-2rem' },
    zIndex: 5
  },
  compositionImage2: {
    right: { xs: 0, sm: '4rem', md: '8rem', lg: '15rem' },
    top: { xs: '5rem', sm: '3rem', md: '5rem', lg: '1rem' },
    zIndex: { xs: 10, sm: 5 }
  },
  compositionImage3: {
    left: { xs: '-5rem', sm: '23rem', md: '12rem', lg: '20%' },
    top: { xs: '3rem', sm: '10rem', md: '8rem', lg: '7rem' },
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
    >
      <Grid sx={styles.composition}>
        <Grid
          component="img"
          alt="image_1"
          sx={styles.compositionImage1}
          src={item.image1}
        />
        <Grid
          component="img"
          alt="image_2"
          sx={styles.compositionImage2}
          src={item.image2}
        />
        <Grid
          component="img"
          alt="image_3"
          sx={styles.compositionImage3}
          src={item.image3}
        />
      </Grid>
    </Grid>
  );
};
