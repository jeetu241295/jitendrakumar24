import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as PhoneSVG } from "./phone.svg";
import styles from "../styles.css";

const Phone = ({ classes }) => {
  return <PhoneSVG className={classes.whiteColor} height={16} width={16} />;
};
export default withStyles(styles)(Phone);
