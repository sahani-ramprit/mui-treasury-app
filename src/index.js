import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import history from "./utils/history";
import App from "./app";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router history={history}>
    <StylesProvider injectFirst>
      <CssBaseline />
      <App />
    </StylesProvider>
  </Router>,
  rootElement
);
