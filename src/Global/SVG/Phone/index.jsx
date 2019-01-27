import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PhoneSVG from "./phone.svg";

const styles = theme => ({});

const Phone = props => {
  return (
    <Grid>
      <PhoneSVG />
    </Grid>
  );
};
export default withStyles(styles)(Phone);
