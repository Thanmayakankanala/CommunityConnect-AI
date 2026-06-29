import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/report"
          element={<ReportIssue />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </>
  );
}

export default App;