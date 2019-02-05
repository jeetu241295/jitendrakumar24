import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography, Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    marginBottom: "1rem"
  },
  primary: {
    color: theme.colors.mainAction,
    backgroundColor: theme.colors.footerNav,
    height: "1rem",
    borderRadius: "10px"
  },
  value: {
    fontSize: "1rem",
    fontWeight: 500,
    padding: "0 .5rem"
  },
  title: {
    fontSize: "2rem",
    fontWeight: 900
  }
});

const ProgressBar = props => {
  const { classes, value, heading } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h4" component="h4">
          {heading}
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <LinearProgress
          classes={{
            colorPrimary: classes.primary
          }}
          variant="determinate"
          value={value}
        />
      </Grid>
      <Grid item xs={1}>
        <Typography className={classes.value} variant="h4" component="h4">
          {value}%
        </Typography>
      </Grid>
    </Grid>
  );
};

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  heading: PropTypes.string
};
ProgressBar.defaultProps = {
  heading: null
};

export default withStyles(styles)(ProgressBar);
