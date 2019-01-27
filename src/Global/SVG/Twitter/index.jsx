import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TwitterSVG from "./twitter.svg";

const styles = theme => ({});

const Twitter = props => {
  return (
    <Grid>
      <TwitterSVG />
    </Grid>
  );
};
export default withStyles(styles)(Twitter);
