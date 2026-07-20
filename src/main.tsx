import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

// Restore path after GitHub Pages 404.html redirect
const spaRedirect = sessionStorage.getItem("spa-redirect");
if (spaRedirect) {
  sessionStorage.removeItem("spa-redirect");
  if (spaRedirect !== window.location.pathname + window.location.search + window.location.hash) {
    window.history.replaceState(null, "", spaRedirect);
  }
}

createRoot(document.getElementById("root")!).render(<App />);
