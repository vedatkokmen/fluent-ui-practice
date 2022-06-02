import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import App from "./App";
import Reviews from "./views/Reviews";

import { Provider, teamsTheme } from "@fluentui/react-northstar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ColorFlipper from "./views/ColorFlipper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// react-router-dom routing
const routing = (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/color-flipper" element={<ColorFlipper />}></Route>
      <Route path="/reviews" element={<Reviews />}></Route>
    </Routes>
  </Router>
);

root.render(
  <React.StrictMode>
    <Provider theme={teamsTheme}>{routing}</Provider>
  </React.StrictMode>
);
