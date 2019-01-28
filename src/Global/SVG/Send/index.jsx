import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as SendSVG } from "./send.svg";
import styles from "../styles.css";

const Send = ({ classes }) => {
  return <SendSVG className={classes.whiteColor} height={16} width={16} />;
};
export default withStyles(styles)(Send);
