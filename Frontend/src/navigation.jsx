// src/navigation.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import App from "./App";
import Sidebar from "./components/sidebar";
import Knowledge from "./pages/Knowledge";
import Plugins from "./pages/Plugins";
import SettingsComponent from "./pages/setting";
import Studio from "./pages/studio";
import StartupKits from "./pages/StartupKits";
import Scripts from "./pages/Scripts";
import TestingMethodologies from "./pages/TestingMethodologies";

export default function Navigation() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Routes>
          {/* ✅ Default: go directly to chat */}
          <Route path="/" element={<Navigate to="/chat" replace />} />

          {/* ✅ App pages */}
          <Route path="/chat" element={<App />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/plugins" element={<Plugins />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/startupkits" element={<StartupKits />} />
          <Route path="/scripts" element={<Scripts />} />
          <Route path="/settings/*" element={<SettingsComponent />} />
          <Route path="/testingmethods" element={<TestingMethodologies />} />

          {/* ✅ Fallback */}
          <Route path="*" element={<Navigate to="/chat" replace />} />
        </Routes>
      </div>
    </div>
  );
}
