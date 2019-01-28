import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as LoveSVG } from "./heart.svg";
import styles from "../styles.css";

const Love = ({ classes }) => {
  return <LoveSVG className={classes.primaryColor} width={20} height={20} />;
};
export default withStyles(styles)(Love);
