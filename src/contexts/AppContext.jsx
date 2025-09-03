import React, { useEffect, useState } from "react";
import { AppContext } from "../hooks/useAppContext.jsx";

export const AppProvider = ({ children }) => {
  const url = new URL("/data.json", import.meta.url).href;
  const [destinations, setDestinations] = useState([]);
  const [crew, setCrew] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setDestinations(data.destinations);
        setCrew(data.crew);
        setTechnology(data.technology);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{ destinations, crew, technology, isLoading, errorMessage }}
    >
      {children}
    </AppContext.Provider>
  );
};
