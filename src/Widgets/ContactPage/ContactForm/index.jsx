import React, { useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useForm, FormProvider } from 'react-hook-form';
import Button from '__SHARED__/Button';
import { TextField } from '__SHARED__/ReactHookForm';
import { SendIcon } from '__ASSETS__/SVG';
// import { normalizePhone, normalizeUserName } from './Normalise';

const styles = {
  header: {
    color: 'primary.main',
    marginBottom: '2rem',
    alignSelf: 'flex-start',
    fontSize: '2rem',
    textTransform: 'uppercase'
  },
  textField: {
    marginTop: '1rem',
    marginBottom: '1rem'
  }
};

const ContactForm = () => {
  const defaultValues = useMemo(() => {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }, []);

  const methods = useForm({
    mode: 'onTouched',
    defaultValues
  });
  const { handleSubmit } = methods;

  const saveValues = values => {
    console.log(values);
    // submitLoader();
    // sendMail(values);
  };

  return (
    <FormProvider {...methods}>
      <Grid
        container
        justifyContent="center"
        alignItems="flex-end"
        flexDirection="column"
        component="form"
        onSubmit={handleSubmit(saveValues)}
      >
        <Typography sx={styles.header} component="h3">
          Leave A Message
        </Typography>
        <Grid container flexDirection="column">
          <TextField
            sx={styles.textField}
            name="name"
            label="Name"
            // normalize={normalizeUserName}
          />
          <TextField sx={styles.textField} name="email" label="Email" />
          <TextField
            sx={styles.textField}
            name="mobile"
            label="Mobile"
            // normalize={normalizePhone}
          />
          <TextField sx={styles.textField} name="subject" label="Subject" />
          <TextField
            sx={styles.textField}
            name="message"
            label="Message"
            multiline
            rows={7}
          />
        </Grid>
        <Button sx={{ mt: '2rem' }} startIcon={<SendIcon />} color="secondary">
          Send
        </Button>
      </Grid>
    </FormProvider>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
