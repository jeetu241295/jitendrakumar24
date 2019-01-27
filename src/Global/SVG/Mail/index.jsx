import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import MailSVG from "./envelop.svg";

const styles = theme => ({});

const Mail = props => {
  return (
    <Grid>
      <MailSVG />
    </Grid>
  );
};
export default withStyles(styles)(Mail);
