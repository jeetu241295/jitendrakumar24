import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as LocationSVG } from "./location2.svg";
import styles from "../styles.css";

const Location = ({ classes }) => {
  return <LocationSVG className={classes.whiteColor} height={32} width={32} />;
};
export default withStyles(styles)(Location);
