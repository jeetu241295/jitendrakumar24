import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Button from '__SHARED__/Button';
import TextField from '__SHARED__/ReduxForm/TextField';
import { SendIcon } from '__ASSETS__/SVG';
import { normalizePhone, normalizeUserName } from './Normalise';

const styles = makeStyles(theme => ({
  header: {
    color: theme.colors.mainAction,
    marginBottom: '2.5rem',
    alignSelf: 'flex-start',
    fontSize: '2rem',
    textTransform: 'uppercase'
  },
  contactFormWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  send: {
    color: theme.colors.black,
    alignSelf: 'flex-end'
  }
}));

const ContactForm = props => {
  const { handleSubmit } = props;
  const classes = styles();
  return (
    <Grid container className={classes.contactFormWrap}>
      <Typography className={classes.header} component="h3">
        Leave A Message
      </Typography>
      <Grid container className={classes.contactForm}>
        <TextField
          id="name"
          className={classes.textField}
          name="name"
          label="Name"
          normalize={normalizeUserName}
        />
        <TextField
          className={classes.textField}
          id="email"
          name="email"
          label="Email"
        />
        <TextField
          className={classes.textField}
          id="mobile"
          name="mobile"
          label="Mobile"
          normalize={normalizePhone}
        />
        <TextField
          className={classes.textField}
          id="subject"
          name="subject"
          label="Subject"
        />
        <TextField
          className={classes.textField}
          id="message"
          name="message"
          label="Message"
          multiline
          rows={7}
        />
      </Grid>
      <Button
        startIcon={<SendIcon />}
        className={classes.send}
        onClick={handleSubmit}
        color="secondary"
      >
        Send
      </Button>
    </Grid>
  );
};
ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
export default ContactForm;
