import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logs from "./components/Components/Logs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/logs" element={<Logs/>}/>
    </Routes>
    </Router>
  </React.StrictMode>
);

