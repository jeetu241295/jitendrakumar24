import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import GooglePlusSVG from "./google-plus3.svg";

const styles = theme => ({});

const GooglePlus = props => {
  return (
    <Grid>
      <GooglePlusSVG />
    </Grid>
  );
};
export default withStyles(styles)(GooglePlus);
