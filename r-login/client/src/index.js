import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Dataprovider } from "./context/DataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Dataprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Dataprovider>
);
