import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as MailSVG } from "./envelop.svg";
import styles from "../styles.css";

const Mail = ({ classes }) => {
  return <MailSVG className={classes.whiteColor} height={16} width={16} />;
};
export default withStyles(styles)(Mail);
