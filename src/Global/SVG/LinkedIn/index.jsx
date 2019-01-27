import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import LinkedInSVG from "./linkedin.svg";

const styles = theme => ({});

const LinkedIn = props => {
  return (
    <Grid>
      <LinkedInSVG />
    </Grid>
  );
};
export default withStyles(styles)(LinkedIn);
