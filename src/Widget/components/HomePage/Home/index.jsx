import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import gal11 from '__ASSETS__/Images/gal-11';

const styles = {
  home: {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${gal11}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    width: '100%',
    height: '90vh',
    minHeight: 600,
    paddingTop: '10rem',
    paddingBottom: '10rem',
    position: 'relative',
    display: 'flex',
    backgroundBlendMode: 'soft-light',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundPosition: { xs: '60% 50%', sm: '50% 50%' }
  },
  nameWrap: {
    borderTop: '2px solid',
    borderBottom: '2px solid',
    borderColor: 'common.white',
    width: '50%'
  },
  name: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: { xs: '2.5rem', sm: '5rem' },
    letterSpacing: { xs: '0.5rem', sm: '1.2rem' },
    fontWeight: 900,
    color: 'colors.transparent',
    backgroundImage: `linear-gradient(to bottom, #11cb5f, #11cbff)`,
    WebkitBackgroundClip: 'text',
    padding: { xs: '1rem', sm: '1.2rem', md: '2rem' },
    fontFamily: 'Raleway Webfont'
  },
  hello: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '2.5rem',
    color: 'colors.mainAction',
    fontFamily: 'Courgette'
  },
  line: {
    borderBottom: `2px solid colors.mainAction`
  },
  helloWrap: {
    display: 'flex',
    flexDirection: 'row'
  }
};

function Home() {
  return (
    <Grid container sx={styles.home}>
      <Grid sx={styles.helloWrap}>
        <Grid sx={styles.line} />
        <Typography sx={styles.hello} component="div" variant="h6">
          Hey, I&#39;m
        </Typography>
        <Grid sx={styles.line} />
      </Grid>
      <Grid sx={styles.nameWrap}>
        <Typography sx={styles.name} component="h2" variant="h1">
          Jitendra
        </Typography>
        <Typography sx={styles.name} component="h2" variant="h1">
          Kumar
        </Typography>
      </Grid>
    </Grid>
  );
}

Home.propTypes = {};
export default Home;
