import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
axios.defaults.baseURL = "https://api.imgflip.com";
axios.defaults.headers.post["accept"] =
  "application/json, text/javascript, */*; q=0.01";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
