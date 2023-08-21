import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import motoImg from '__ASSETS__/Images/motto';
import { motto } from '../_helpers/constants';

const styles = {
  mottoWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: { xs: '1.5rem', sm: '3rem', md: '4rem' },
    backgroundColor: 'colors.calenderColor'
  },
  motto: {
    fontSize: '3rem',
    height: { xs: '7rem', sm: '3rem' },
    lineHeight: { xs: '3rem', sm: '2.5rem' },
    fontWeight: 900,
    textAlign: 'center',
    color: 'colors.transparent',
    background: `url(${motoImg})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 46%',
    WebkitBackgroundClip: 'text',
    backgroundRepeat: 'no-repeat'
  }
};

const Motto = () => {
  return (
    <Grid container sx={styles.mottoWrap}>
      <Typography sx={styles.motto} variant="h1" component="h1">
        {motto}
      </Typography>
    </Grid>
  );
};

Motto.propTypes = {};
Motto.defaultProps = {};

export default Motto;
