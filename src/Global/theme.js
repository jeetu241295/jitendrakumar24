import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const colors = {
  white: "#fff",
  black: "#000",
  navbar: "#343a40",
  footer: "#222222",
  footerNav: "#c3bec2",
  primary: "#ff2b4a",
  contact: "#352639",
  error: "#BA0C2F",
  secondary: purple[500]
};

const theme = createMuiTheme({
  // breakpoints: {
  //   values: {
  //     xs: 350,
  //     sm: 450
  //   }
  // },
  overrides: {
    // MuiOutlinedInput: {
    //   notchedOutline: {
    //     borderColor: colors.white + " !important"
    //   }
    // },
    // MuiFormLabel: {
    //   root: {
    //     color: colors.white
    //   }
    // }
  },
  palette: {
    primary: { main: "#11cb5f" }, // Purple and green play nicely together.
    secondary: { main: purple[500] },
    error: { main: "#BA0C2F" } // This is just green.A700 as hex.
  },
  colors: colors,
  typography: { useNextVariants: true }
});

export default theme;
