import React from "react";
import { AppContext } from "../hooks/useAppContext.jsx";

export const AppProvider = ({ children }) => {
  return <AppContext value={{ name: "Samuel" }}>{children}</AppContext>;
};
