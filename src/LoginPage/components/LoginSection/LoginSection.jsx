import React from "react";
import { Grid, Button } from "@material-ui/core";

const LoginSection = props => {
  const { setCount, count } = props;
  return (
    <Grid>
      <Grid>{count}</Grid>
      <Button variant="contained" color="primary" onClick={() => setCount(1)}>
        Click Me
      </Button>
    </Grid>
  );
};

export default LoginSection;
