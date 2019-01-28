import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as TwitterSVG } from "./twitter.svg";
import styles from "../styles.css";

const Twitter = ({ classes }) => {
  return <TwitterSVG className={classes.whiteColor} />;
};
export default withStyles(styles)(Twitter);
