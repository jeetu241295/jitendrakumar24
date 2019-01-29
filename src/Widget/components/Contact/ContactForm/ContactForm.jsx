import React from "react";
import { Grid, withStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import Button from "../../../../Components/Button";
import TextField from "../../../../Components/ReduxForm/TextField";
import { Send } from "../../../../Global/SVG";

const styles = theme => ({
  header: {
    color: theme.colors.white,
    marginBottom: "2.5rem",
    alignSelf: "flex-start",
    fontSize: "2rem",
    textTransform: "uppercase"
  },
  contactFormWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  contactForm: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  send: {
    alignSelf: "flex-end"
  }
});

const ContactForm = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.contactFormWrap}>
      <Typography className={classes.header} component="h3">
        Leave A Message
      </Typography>
      <Grid container className={classes.contactForm}>
        <TextField className={classes.textField} name="name" label="Name" />
        <TextField className={classes.textField} name="email" label="Email" />
        <TextField
          className={classes.textField}
          name="subject"
          label="Subject"
        />
        <TextField
          className={classes.textField}
          name="message"
          label="Message"
          multiline
          rows={7}
        />
      </Grid>
      <Button icon={<Send />} className={classes.send} onClick={() => {}}>
        Send
      </Button>
    </Grid>
  );
};
ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ContactForm);
