import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ProgressBar from "../../../Components/ProgressBar";

const styles = theme => ({
  about: {
    display: "flex",
    padding: "10rem",
    alignItems: "flex-start"
  },
  imageWrap: {
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block"
    }
  },
  skills: {
    position: "relative",
    padding: "2.5rem",
    marginTop: "2rem"
  },
  aboutMe: {
    position: "relative",
    padding: "2.5rem",
    alignSelf: "center"
  },
  title: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "2px",
    height: "2px",
    width: "50px",
    margin: "2rem",
    backgroundColor: theme.colors.mainAction
  }
});

const About = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.about}>
      <Grid className={classes.imageWrap} item md={5}>
        <img src={require("../../../static/images/about.jpg")} alt="My Pic" />
      </Grid>
      <Grid className={classes.aboutMe} item md={7}>
        <Grid className={classes.title} />
        <Typography variant="h4" component="h4">
          About Me
        </Typography>
      </Grid>
      <Grid className={classes.skills} item md={4}>
        <Grid className={classes.title} />
        <Typography variant="h4" component="h4">
          My Skills
        </Typography>
      </Grid>
      <Grid className={classes.skills} item md={8}>
        <ProgressBar heading="Bootstrap" value={50} />
        <ProgressBar heading="Foundation" value={50} />
        <ProgressBar heading="React" value={50} />
        <ProgressBar heading="Redux" value={50} />
        <ProgressBar heading="Redux-Form" value={50} />
        <ProgressBar heading="Material-UI" value={50} />
        <ProgressBar heading="HTML & CSS" value={50} />
      </Grid>
    </Grid>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};
About.defaultProps = {};

export default withStyles(styles)(About);
