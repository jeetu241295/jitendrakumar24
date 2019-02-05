import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Widget/reducers";
import PersonalWebsite from "./Widget/components/App";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./Global/theme";
import CssBaseline from '@material-ui/core/CssBaseline';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <PersonalWebsite />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
