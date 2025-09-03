import Navbar from "./components/Navbar.jsx";
import { useEffect } from "react";
import { BrowserRouter } from "react-router";
import AnimatedRoutes from "./components/AnimatedRoutes.jsx";
import { AppProvider } from "./contexts/AppContext.jsx";

function App() {
  // To be removed later
  useEffect(() => {
    document.body.className = `bg-blue-900 overflow-hidden`;
  }, []);

  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
