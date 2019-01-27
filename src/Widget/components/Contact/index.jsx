import React from "react";
import { withStyles, Typography, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import ContactForm from "./ContactForm";
import classNames from "classnames";
import Normal from "../../../Components/Normal";

const styles = theme => ({
  contact: {
    background: `url(${require("../../../static/images/jumbo3.jpg")}) no-repeat center center fixed`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.45)",
    width: "100%",
    minHeight: 800,
    paddingTop: 100,
    paddingBottom: 100,
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    height: "90%"
  },
  personalInfoWrap: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  info: {
    backgroundColor: theme.colors.contact,
    padding: 40,
    width: 390,
    color: theme.colors.white
  },
  header: {
    color: theme.colors.white,
    marginBottom: 25,
    fontSize: "2rem",
    textTransform: "uppercase"
  },
  marginBottom: {
    marginBottom: "auto"
  },
  marginTop: {
    marginTop: "auto"
  }
});

const Contact = props => {
  const { classes } = props;
  return (
    <Grid className={classes.contact}>
      <Grid container className={classes.overlay}>
        <Grid className={classes.info}>
          <ContactForm />
        </Grid>
        <Grid className={classes.personalInfoWrap}>
          <Grid className={classNames(classes.info, classes.marginBottom)}>
            <Typography className={classes.header} component="h3">
              Address
            </Typography>
            <Normal>
              SSS Colony,Near Padmavathi Function Hall,Gollapudi,Vijayawada
              Krishna Dt.,Andhra Pradesh,India-521456
            </Normal>
          </Grid>
          <Grid className={classes.info}>
            <Typography className={classes.header} component="h3">
              Phone
            </Typography>
            <Normal>+91 949 196 4870</Normal>
            <Normal>+91 798 938 1360</Normal>
          </Grid>
          <Grid className={classNames(classes.info, classes.marginTop)}>
            <Typography className={classes.header} component="h3">
              Web
            </Typography>
            <Normal>Mail:jeetu241295@gmail.com</Normal>
            <Normal>Website: www.jitendrakumar24.tech</Normal>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Contact);
