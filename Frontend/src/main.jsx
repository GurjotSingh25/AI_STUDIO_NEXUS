// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation";
import "./index.css";
import { ChatProvider } from "../context/ChatContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChatProvider>
        <Navigation />
      </ChatProvider>
    </BrowserRouter>
  </React.StrictMode>
);
