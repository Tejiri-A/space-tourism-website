import { Outlet } from "react-router";
import Navbar from "./components/Navbar.jsx";
import { useEffect } from "react";

function App() {
  // To be removed later
  useEffect(() => {
    document.body.className = `bg-blue-900`;
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
