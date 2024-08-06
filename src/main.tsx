import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  </BrowserRouter>
);
