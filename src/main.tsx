import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "./assets/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);
