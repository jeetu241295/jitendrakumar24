import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  home: {
    background: `url(${require("../../../static/images/4.jpg")}) no-repeat center center fixed`,
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
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
    flexDirection: "column"
  },
  nameWrap: {
    borderTop: "2px solid",
    borderBottom: "2px solid white",
    width: "50%",
    borderColor: theme.colors.white
  },
  name: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 48,
    letterSpacing: 12,
    fontWeight: 900,
    margin: 0,
    color: theme.colors.white,
    padding: 20,
    fontFamily: "Raleway Webfont"
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.home}>
      <Grid className={classes.overlay}>
        <Grid className={classes.nameWrap}>
          <Typography className={classes.name} component="h2" variant="h1">
            Jitendra
          </Typography>
          <Typography className={classes.name} component="h2" variant="h1">
            Kumar
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

Home.propType = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
