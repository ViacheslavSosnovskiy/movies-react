import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter
    // basename="/your_repo_name"
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
