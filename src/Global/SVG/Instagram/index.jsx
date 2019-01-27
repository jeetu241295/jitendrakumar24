import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import InstagramSVG from "./instagram.svg";

const styles = theme => ({});

const Instagram = props => {
  return (
    <Grid>
      <InstagramSVG />
    </Grid>
  );
};
export default withStyles(styles)(Instagram);
