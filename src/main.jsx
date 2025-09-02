import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home, Destination, Crew, Technology, Error } from "./pages/index.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<App />}>
          <Route index element={<Home />} />
          <Route path={`destination`} element={<Destination />} />
          <Route path={`crew`} element={<Crew />} />
          <Route path={`technology`} element={<Technology />} />
        </Route>
        <Route path={`*`} element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
