import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = () => ({});

const App = props => {
  return <Grid container>About</Grid>;
};

App.propTypes = {
  motto: PropTypes.string.isRequired
};
App.defaultProps = {};

export default withStyles(styles)(App);
