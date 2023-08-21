import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Normal from '__SHARED__/Fonts/Normal';
import Link from '__SHARED__/Link';
import contactImg from '__ASSETS__/Images/contact';
import { PhoneIcon, MailIcon, LocationIcon, WebIcon } from '__ASSETS__/SVG';
import ContactForm from './ContactForm';

const styles = {
  contact: {
    background: `linear-gradient(to right, common.black5, common.black5),url(${contactImg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    padding: {
      xs: '9rem 1.5rem 1.5rem 1.5rem',
      md: '9rem 3rem 3rem 3rem',
      lg: '9rem 7rem 7rem 7rem'
    },
    backgroundBlendMode: 'soft-light',
    flex: '1 0 100%'
  },
  info: {
    backgroundColor: 'colors.contact',
    padding: '2rem 4rem',
    color: 'common.white',
    margin: { xs: '1rem 0', sm: '0rem' }
  },
  header: {
    color: 'primary.main',
    marginBottom: '2.5rem',
    fontSize: '2rem',
    textTransform: 'uppercase'
  },
  normal: {
    color: 'common.white'
  }
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container sx={styles.contact} justifyContent="space-around">
      <Grid item sm={5} xs={10} sx={styles.info}>
        <ContactForm />
      </Grid>
      <Grid
        item
        sm={5}
        xs={10}
        container
        justifyContent="space-between"
        flexDirection="column"
      >
        <Grid sx={styles.info}>
          <Typography sx={styles.header} component="h3">
            Address
          </Typography>
          <Link
            href="https://maps.google.com/?q=Padmavathi Function Hall,Gollapudi"
            target="_blank"
            rel="noreferrer"
          >
            <LocationIcon />
            <Normal sx={styles.normal}>
              Plot No:69 Iron Merchant,SSS Colony,Near Padmavathi Function Hall,
              Gollapudi, Vijayawada, Andhra Pradesh, India. 521225
            </Normal>
          </Link>
        </Grid>
        <Grid sx={styles.info}>
          <Typography sx={styles.header} component="h3">
            Phone
          </Typography>
          <Link href="tel:+91 949-196-4870">
            <PhoneIcon />
            <Normal sx={styles.normal}>+91 949 196 4870</Normal>
          </Link>
          <Link href="tel:+91 949-196-4870">
            <PhoneIcon />
            <Normal sx={styles.normal}>+91 798 938 1360</Normal>
          </Link>
        </Grid>
        <Grid sx={styles.info}>
          <Typography sx={styles.header} component="h3">
            Web
          </Typography>
          <Link href="mailto:jeetu241295@gmail.com">
            <MailIcon />
            <Normal sx={styles.normal}>jeetu241295@gmail.com</Normal>
          </Link>
          <Link href="/">
            <WebIcon />
            <Normal sx={styles.normal}>www.jitendrakumar24.tech</Normal>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

Contact.propTypes = {};

export default Contact;
