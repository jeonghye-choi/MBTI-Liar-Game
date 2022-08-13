import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "./assets/theme";
import styles from "./styles";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global styles={styles} />
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);
