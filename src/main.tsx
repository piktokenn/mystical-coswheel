import { createRoot } from "react-dom/client";
import App from "./App";  // Fixed import path without .tsx extension
import "./globals.css";

createRoot(document.getElementById("root")!).render(<App />);