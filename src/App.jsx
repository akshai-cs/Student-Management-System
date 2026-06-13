import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Attendance from "./pages/Attendance";
import Marks from "./pages/Marks";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Main Layout Routes */}
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="students" element={<Students />} />

          <Route path="attendance" element={<Attendance />} />

          <Route path="marks" element={<Marks />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}