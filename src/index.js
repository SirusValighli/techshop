import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { MobileContextProvider } from "./store/mobile-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MobileContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MobileContextProvider>
);
