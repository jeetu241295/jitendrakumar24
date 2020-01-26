import React, { useEffect } from 'react';
import { makeStyles, Typography, Grid, Link } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ContactForm from './ContactForm';
import Normal from '../../../Components/Normal';
import { Phone, Mail, Location, Web } from '../../../Global/SVG';
import contactImg from '../../../static/images/contact.jpg';

const styles = makeStyles(theme => ({
  contact: {
    background: `url(${contactImg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    width: '100%',
    padding: '7rem',
    paddingTop: '10rem',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    height: '90%',
    [theme.breakpoints.down('md')]: {
      paddingTop: '8rem',
      padding: '3rem'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '5rem',
      padding: '1.5rem'
    }
  },
  personalInfoWrap: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  info: {
    backgroundColor: theme.colors.contact,
    padding: '4rem',
    color: theme.colors.white,
    [theme.breakpoints.between('xs', 'md')]: {
      marginTop: '1rem',
      marginBottom: '1rem',
      padding: '2.5rem'
    }
  },
  header: {
    color: theme.colors.mainAction,
    marginBottom: '2.5rem',
    fontSize: '2rem',
    textTransform: 'uppercase'
  },
  marginBottom: {
    marginBottom: 'auto'
  },
  marginTop: {
    marginTop: 'auto'
  },
  listItem: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  normal: {
    color: theme.colors.white
  }
}));

const Contact = props => {
  const { sendMail, reset } = props;
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const saveValues = values => {
    sendMail(values);
    reset();
  };
  return (
    <Grid className={classes.contact}>
      <Grid container className={classes.overlay}>
        <Grid item sm={5} xs={12} className={classes.info}>
          <ContactForm onSubmit={saveValues} />
        </Grid>
        <Grid item sm={5} xs={12} className={classes.personalInfoWrap}>
          <Grid className={classNames(classes.info, classes.marginBottom)}>
            <Typography className={classes.header} component="h3">
              Address
            </Typography>
            <Link
              className={classes.listItem}
              href="https://maps.google.com/?q=Padmavathi Function Hall,Gollapudi"
              target="_blank"
            >
              <Location />
              <Normal className={classes.normal}>
                Plot No:69 Iron Merchant,SSS Colony,Near Padmavathi Function
                Hall, Gollapudi, Vijayawada, Andhra Pradesh, India. 521225
              </Normal>
            </Link>
          </Grid>
          <Grid className={classes.info}>
            <Typography className={classes.header} component="h3">
              Phone
            </Typography>
            <Link className={classes.listItem} href="tel:+91 949-196-4870">
              <Phone />
              <Normal className={classes.normal}>+91 949 196 4870</Normal>
            </Link>
            <Link className={classes.listItem} href="tel:+91 949-196-4870">
              <Phone />
              <Normal className={classes.normal}>+91 798 938 1360</Normal>
            </Link>
          </Grid>
          <Grid className={classNames(classes.marginTop, classes.info)}>
            <Typography className={classes.header} component="h3">
              Web
            </Typography>
            <Link
              className={classes.listItem}
              href="mailto:jeetu241295@gmail.com"
            >
              <Mail />
              <Normal className={classes.normal}>jeetu241295@gmail.com</Normal>
            </Link>
            <Link className={classes.listItem} href="/">
              <Web />
              <Normal className={classes.normal}>
                www.jitendrakumar24.tech
              </Normal>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Contact.propTypes = {
  sendMail: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};
export default Contact;
