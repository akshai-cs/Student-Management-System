import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  BookOpen,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">

      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-10">
        Student Management
      </h1>

      {/* Navigation */}
      <nav className="space-y-3">

        {/* Dashboard */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`
          }
        >
          <LayoutDashboard size={20} />

          <span>Dashboard</span>
        </NavLink>

        {/* Students */}
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`
          }
        >
          <Users size={20} />

          <span>Students</span>
        </NavLink>

        {/* Attendance */}
        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`
          }
        >
          <CalendarCheck size={20} />

          <span>Attendance</span>
        </NavLink>

        {/* Marks */}
        <NavLink
          to="/marks"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`
          }
        >
          <BookOpen size={20} />

          <span>Marks</span>
        </NavLink>

      </nav>

    </aside>
  );
}