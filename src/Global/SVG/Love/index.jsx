import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import LoveSVG from "./heart.svg";

const styles = theme => ({});

const Love = props => {
  return (
    <Grid>
      <LoveSVG />
    </Grid>
  );
};
export default withStyles(styles)(Love);
