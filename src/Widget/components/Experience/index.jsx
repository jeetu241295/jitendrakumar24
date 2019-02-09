import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import { Calender } from "../../../Global/SVG";

const styles = theme => ({
  experienceWrap: {
    backgroundColor: theme.colors.containerBackground
  },
  paper: {
    padding: "2rem",
    margin: "1rem",
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.white,
    border: "2px solid",
    "&:hover": {
      borderColor: theme.colors.mainAction
    }
  },
  title: {
    fontSize: "3rem",
    fontWeight: 500,
    margin: "1rem"
  }
});

const Experience = props => {
  const { classes } = props;
  return (
    <Grid
      container
      className={classes.experienceWrap}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={3} className={classes.education}>
        <Typography className={classes.title} variant="h4" componeent="h4">
          Education
        </Typography>
        <Grid className={classes.paper}>
          <Calender />Schooling
        </Grid>
        <Grid className={classes.paper}>Schooling</Grid>
        <Grid className={classes.paper}>Schooling</Grid>
      </Grid>
      <Grid item xs={3} className={classes.experience}>
        <Typography className={classes.title} variant="h4" componeent="h4">
          Experience
        </Typography>
        <Grid className={classes.paper}>Schooling</Grid>
        <Grid className={classes.paper}>Schooling</Grid>
        <Grid className={classes.paper}>Schooling</Grid>
      </Grid>
    </Grid>
  );
};

Experience.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Experience);
