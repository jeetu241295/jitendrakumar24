import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Normal from '__SHARED__/Fonts/Normal';
import lostImg from '__ASSETS__/Images/lost';

const styles = {
  about: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
    padding: '2rem',
    paddingTop: '6.4rem'
  },
  textWrap: {
    flexDirection: 'column'
  },
  imgWrap: {
    width: { xs: '20rem', sm: '25rem' },
    height: { xs: '20rem', sm: '25rem' }
  },
  oops: {
    fontWeight: 'bold',
    fontSize: '8rem',
    marginBottom: '3rem'
  },
  text: {
    color: 'common.black',
    fontSize: '1.5rem',
    lineHeight: 1.5
  }
};

const NoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container sx={styles.about}>
      <Grid item md={4} sm={6} xs={12}>
        <Grid component="img" sx={styles.imgWrap} src={lostImg} alt="Lost" />
      </Grid>
      <Grid item md={8} sm={6} xs={12} sx={styles.textWrap}>
        <Normal sx={styles.oops}>Oops..!</Normal>
        <Normal sx={styles.text}>
          It seams you have lost in the path of search or something might have
          gone wrong.
        </Normal>
        <Normal sx={styles.text}>
          Please go to the <Link to="/">home</Link> Page
        </Normal>
      </Grid>
    </Grid>
  );
};

NoPage.propTypes = {};
NoPage.defaultProps = {};

export default NoPage;
