import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Source of app component
import "./index.css"; //global css styles

// Root index.html with react app element
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
