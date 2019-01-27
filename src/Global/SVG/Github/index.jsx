import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import GithubSVG from "./github.svg";

const styles = theme => ({});

const Github = props => {
  return (
    <Grid>
      <GithubSVG />
    </Grid>
  );
};
export default withStyles(styles)(Github);
