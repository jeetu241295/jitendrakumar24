import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as LinkedInSVG } from "./linkedin.svg";
import styles from "../styles.css";

const LinkedIn = ({ classes }) => {
  return <LinkedInSVG className={classes.whiteColor} />;
};
export default withStyles(styles)(LinkedIn);
