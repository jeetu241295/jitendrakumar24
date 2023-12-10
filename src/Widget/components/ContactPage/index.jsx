import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Normal from '__SHARED__/Fonts/Normal';
import Button from '__SHARED__/Button';
import contactImg from '__ASSETS__/Images/contact';
import { PhoneIcon, MailIcon, LocationIcon, WebIcon } from '__ASSETS__/SVG';
import ContactForm from './ContactForm';

const styles = {
  contact: {
    background: `linear-gradient(to right, rgba(0,0,0,5),rgba(0,0,0,5)),url(${contactImg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    padding: { xs: '1.5rem', sm: '3rem', md: '6rem' },
    paddingTop: { xs: '8rem', md: '10rem' },
    backgroundBlendMode: 'soft-light',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around'
  },
  info: {
    backgroundColor: 'colors.contact',
    padding: '2rem',
    color: 'common.white',
    my: '1rem'
  },
  header: {
    color: 'common.mainAction',
    marginBottom: '2.5rem',
    fontSize: '2rem',
    textTransform: 'uppercase'
  },
  normal: {
    color: 'common.white',
    textTransform: 'none'
  },
  icon: {
    mx: 0
  },
  link: {
    '&:hover': {
      transform: 'none',
      boxShadow: 0
    }
  }
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container sx={styles.contact}>
      <Grid item md={5} xs={12} sx={styles.info}>
        <ContactForm />
      </Grid>
      <Grid item md={5} xs={12} container>
        <Grid item xs={12} sx={styles.info}>
          <Typography sx={styles.header} component="h3">
            Address
          </Typography>
          <Button
            sx={styles.link}
            variant="Text"
            startIcon={<LocationIcon sx={styles.icon} />}
            href="https://maps.google.com/?q=Padmavathi Function Hall,Gollapudi"
            target="_blank"
            rel="noreferrer"
          >
            <Normal sx={styles.normal}>
              Plot No:69 Iron Merchant,SSS Colony,Near Padmavathi Function Hall,
              Gollapudi, Vijayawada, Andhra Pradesh, India. 521225
            </Normal>
          </Button>
        </Grid>
        <Grid item xs={12} sx={styles.info}>
          <Typography sx={styles.header} component="h3">
            Phone
          </Typography>
          <Button
            sx={styles.link}
            variant="Text"
            startIcon={<PhoneIcon sx={styles.icon} />}
            href="tel:+91 798-938-1360"
            target="_blank"
            rel="noreferrer"
          >
            <Normal sx={styles.normal}>+91 798 938 1360</Normal>
          </Button>
        </Grid>
        <Grid item xs={12} sx={styles.info}>
          <Typography sx={styles.header} component="h3">
            Web
          </Typography>
          <Grid>
            <Button
              sx={styles.link}
              variant="Text"
              startIcon={<MailIcon sx={styles.icon} />}
              href="mailto:jitendrakumarbhamidipati@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Normal sx={styles.normal}>
                jitendrakumarbhamidipati@gmail.com
              </Normal>
            </Button>
          </Grid>
          <Grid>
            <Button
              sx={styles.link}
              variant="Text"
              startIcon={<WebIcon sx={styles.icon} />}
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <Normal sx={styles.normal}>www.{window.location.hostname}</Normal>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Contact.propTypes = {};
export default Contact;
