import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as CalenderSVG } from "./calender.svg";
import styles from "../styles.css";

const Calender = ({ classes }) => {
  return <CalenderSVG className={classes.blackColor} height={16} width={16} />;
};
export default withStyles(styles)(Calender);
