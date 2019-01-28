import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as FacebookSVG } from "./facebook2.svg";
import styles from "../styles.css";

const Facebook = ({ classes }) => {
  return <FacebookSVG className={classes.whiteColor} />;
};
export default withStyles(styles)(Facebook);
