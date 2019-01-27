import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import FacebookSVG from "./facebook2.svg";

const styles = theme => ({});

const Facebook = props => {
  return (
    <Grid>
      <FacebookSVG />
    </Grid>
  );
};
export default withStyles(styles)(Facebook);
