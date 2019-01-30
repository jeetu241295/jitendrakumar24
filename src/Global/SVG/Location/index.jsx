import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as LocationSVG } from "./location2.svg";
import styles from "../styles.css";
import classNames from "classnames";

const Location = ({ classes }) => {
  return (
    <LocationSVG
      className={classNames(classes.whiteColor, classes.location)}
      height={32}
      width={32}
    />
  );
};
export default withStyles(styles)(Location);
