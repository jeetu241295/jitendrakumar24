import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as InstagramSVG } from "./instagram.svg";
import styles from "../styles.css";

const Instagram = ({ classes }) => {
  return <InstagramSVG className={classes.whiteColor} />;
};
export default withStyles(styles)(Instagram);
