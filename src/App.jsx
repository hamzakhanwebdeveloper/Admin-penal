import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Import the Layout component

// Sample pages for routing
import Dashboard from "./Dashborad";
import User from "./User";
import Report from "./Report";
import Settings from "./Setting";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout will be a wrapper for all pages */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<User />} />
          <Route path="report" element={<Report />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
