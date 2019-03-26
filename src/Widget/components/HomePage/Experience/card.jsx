import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Calender } from "../../../../Global/SVG";
import Normal from "../../../../Components/Normal";

const styles = theme => ({
  paper: {
    padding: "2rem",
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.white,
    marginBottom: "1rem",
    border: "2px solid",
    "&:hover": {
      borderColor: theme.colors.mainAction
    }
  },
  timeline: {
    display: "flex"
  },
  period: {
    fontSize: "2rem",
    fontWeight: 500,
    marginTop: ".5rem",
    marginBottom: ".5rem"
  },
  place: {
    fontSize: "1.75rem",
    fontWeight: 500,
    marginTop: ".5rem"
  }
});

const Card = props => {
  const { classes, item } = props;
  const isEducation = item.type === "education";
  return (
    <Paper className={classes.paper}>
      <Grid className={classes.timeline}>
        <Calender />
        <Normal>{item.period}</Normal>
      </Grid>
      <Typography className={classes.period} variant="h4" componeent="h4">
        {isEducation ? item.degree : item.role}
      </Typography>
      <Normal>{item.context}</Normal>
      <Typography className={classes.place} variant="h6" componeent="h6">
        {isEducation ? item.place : item.company}
      </Typography>
    </Paper>
  );
};

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};
Card.defaultProps = {};

export default withStyles(styles)(Card);
