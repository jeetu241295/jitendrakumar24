import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as GooglePlusSVG } from "./google-plus3.svg";
import styles from "../styles.css";

const GooglePlus = ({ classes }) => {
  return <GooglePlusSVG className={classes.whiteColor} />;
};
export default withStyles(styles)(GooglePlus);
