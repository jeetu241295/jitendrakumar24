import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const colors = {
  white: "#fff",
  black: "#000",
  navbar: "#343a40",
  footer: "#222222",
  footerNav: "#c3bec2",
  primary: "#ff2b4a",
  contact: "#352639"
};

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  },
  colors: colors,
  typography: { useNextVariants: true }
});

export default theme;
