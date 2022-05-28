import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AppRenderProps from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppRenderProps />
  </React.StrictMode>,
  rootElement
);
