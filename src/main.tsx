import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "normalize.css";
import "./assets/styles/scss/Main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
