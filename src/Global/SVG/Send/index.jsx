import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import SendSVG from "./send.svg";

const styles = theme => ({});

const Send = props => {
  return (
    <Grid>
      <SendSVG />
    </Grid>
  );
};
export default withStyles(styles)(Send);
