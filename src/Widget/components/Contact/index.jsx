import React from "react";
import { withStyles, Typography, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import ContactForm from "./ContactForm";
import classNames from "classnames";
import Normal from "../../../Components/Normal";
import { Phone, Mail, Location, Web } from "../../../Global/SVG";

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
    paddingTop: "10rem",
    paddingBottom: "10rem",
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
    padding: "4rem",
    color: theme.colors.white,
    [theme.breakpoints.up("lg")]: {
      width: 500
    },
    [theme.breakpoints.between("xs", "md")]: {
      width: 390,
      marginTop: "1rem",
      marginBottom: "1rem"
    },
    [theme.breakpoints.down("sm")]: {
      width: 250
    }
  },
  header: {
    color: theme.colors.white,
    marginBottom: "2.5rem",
    fontSize: "2rem",
    textTransform: "uppercase"
  },
  marginBottom: {
    marginBottom: "auto"
  },
  marginTop: {
    marginTop: "auto"
  },
  listItem: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem"
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
            <Grid className={classes.listItem}>
              <Location />
              <Normal>
                SSS Colony,Near Padmavathi Function Hall,Gollapudi,Vijayawada
                Krishna Dt.,Andhra Pradesh,India-521456
              </Normal>
            </Grid>
          </Grid>
          <Grid className={classes.info}>
            <Typography className={classes.header} component="h3">
              Phone
            </Typography>
            <Grid className={classes.listItem}>
              <Phone />
              <Normal>+91 949 196 4870</Normal>
            </Grid>
            <Grid className={classes.listItem}>
              <Phone />
              <Normal>+91 798 938 1360</Normal>
            </Grid>
          </Grid>
          <Grid className={classNames(classes.marginTop, classes.info)}>
            <Typography className={classes.header} component="h3">
              Web
            </Typography>
            <Grid className={classes.listItem}>
              <Mail />
              <Normal>Mail:jeetu241295@gmail.com</Normal>
            </Grid>
            <Grid className={classes.listItem}>
              <Web />
              <Normal>Website: www.jitendrakumar24.tech</Normal>
            </Grid>
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
