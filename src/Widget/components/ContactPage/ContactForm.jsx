import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useForm, FormProvider } from 'react-hook-form';
import Button from '__SHARED__/Button';
import TextField from '__SHARED__/ReactHookForm/TextField';
import { SendIcon } from '__ASSETS__/SVG';
import { sendMail } from '../../personalWebsiteSlice';
// import { normalizePhone, normalizeUserName } from './Normalise';

const styles = {
  header: {
    color: 'common.mainAction',
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
  send: {
    color: 'common.black',
    alignSelf: 'flex-end',
    mt: '2rem'
  }
};

function ContactForm() {
  const methods = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      mobile: '',
      email: '',
      name: '',
      subject: '',
      message: ''
    }
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset();
  }, []);

  return (
    <Grid container sx={styles.contactFormWrap}>
      <Typography sx={styles.header} component="h3">
        Leave A Message
      </Typography>
      <FormProvider {...methods}>
        <Grid container sx={styles.contactForm} spacing={2}>
          <Grid item xs={12}>
            <TextField name="name" label="Name" />
          </Grid>
          <Grid item xs={12}>
            <TextField name="email" label="Email" />
          </Grid>
          <Grid item xs={12}>
            <TextField name="mobile" label="Mobile" />
          </Grid>
          <Grid item xs={12}>
            <TextField name="subject" label="Subject" />
          </Grid>
          <Grid item xs={12}>
            <TextField name="message" label="Message" multiline rows={7} />
          </Grid>
        </Grid>
      </FormProvider>
      <Button
        startIcon={<SendIcon />}
        sx={styles.send}
        color="secondary"
        onClick={handleSubmit(sendMail())}
      >
        Send
      </Button>
    </Grid>
  );
}

ContactForm.propTypes = {};

export default ContactForm;
