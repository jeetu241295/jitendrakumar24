import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as GithubSVG } from "./github.svg";
import styles from "../styles.css";

const Github = ({ classes }) => {
  return <GithubSVG className={classes.whiteColor} />;
};
export default withStyles(styles)(Github);
