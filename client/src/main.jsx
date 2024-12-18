import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

// Rendering the App with Navbar
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>
);
