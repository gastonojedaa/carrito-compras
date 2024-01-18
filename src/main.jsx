import React from "react";
import ReactDOM from "react-dom/client";
import { CarritoApp } from "./CarritoApp";
import "./styles/lista.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarritoApp />
    </React.StrictMode>    
  </BrowserRouter>
);
