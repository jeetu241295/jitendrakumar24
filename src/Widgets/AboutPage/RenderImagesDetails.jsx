import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Normal from '__SHARED__/Fonts/Normal';
import Rating from '__SHARED__/Rating';

const styles = {
  compositionWrap: {
    padding: { xs: 0, md: '2rem' }
  },
  composition: {
    color: 'primary.main',
    position: 'relative',
    minHeight: { xs: '20rem', sm: '25rem', md: '30rem', lg: '35rem' },
    '& img': {
      width: { xs: '33.33%', sm: '40%' },
      boxShadow: 10,
      borderRadius: 2,
      position: { xs: 'relative', sm: 'absolute' },
      outlineOffset: '1.5rem',
      float: { xs: 'left', sm: 'none' },
      zIndex: 5,
      '&:hover': {
        transform: 'scale(1.05) translateY(-0.5rem)',
        boxShadow: 25,
        zIndex: 99990,
        outline: '1.5rem solid',
        outlineColor: 'inherit'
      },
      '&:hover &__photo:not(:hover)': {
        transform: 'scale(0.95)'
      }
    },
    '& #img1': {
      left: { xs: '5rem', md: '4rem' },
      top: { xs: '3rem', md: '-2rem' }
    },
    '& #img2': {
      right: { xs: 0, sm: '8rem', md: '15rem' },
      top: { xs: '5rem', md: '1rem' },
      zIndex: { xs: 10, sm: 5 }
    },
    '& #img3': {
      left: { xs: '-5rem', sm: '10rem', md: '20%' },
      top: { xs: '3rem', sm: '10rem', md: '7rem' }
    }
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
    color: 'primary.main'
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

export const renderImages = item => {
  return (
    <Grid sx={styles.compositionWrap} item md={6} xs={12}>
      <Grid sx={styles.composition}>
        <img alt="image_1" src={item.image1} id="img1" />
        <img alt="image_2" src={item.image2} id="img2" />
        <img alt="image_3" src={item.image3} id="img3" />
      </Grid>
    </Grid>
  );
};
