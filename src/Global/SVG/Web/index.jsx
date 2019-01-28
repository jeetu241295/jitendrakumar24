import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as WebSVG } from "./web-svg.svg";
import styles from "../styles.css";

const Web = ({ classes }) => {
  return <WebSVG className={classes.whiteColor} height={16} width={16} />;
};
export default withStyles(styles)(Web);
