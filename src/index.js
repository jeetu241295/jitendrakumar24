import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./LoginPage/reducers";
import LoginPage from "./LoginPage/components/App";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <LoginPage />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
