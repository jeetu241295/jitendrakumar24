import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import LocationSVG from "./location2.svg";

const styles = theme => ({});

const Location = props => {
  return (
    <Grid>
      <LocationSVG />
    </Grid>
  );
};
export default withStyles(styles)(Location);
