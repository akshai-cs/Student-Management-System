import { Users, GraduationCap, CalendarCheck, Search } from "lucide-react";
import { useState } from "react";

const initialStudents = [
  {
    id: 1,
    name: "Rahul Sharma",
    usn: "CSE001",
    dept: "CSE",
    semester: "5",
    status: "Active",
  },
  {
    id: 2,
    name: "Ananya Rao",
    usn: "ISE014",
    dept: "ISE",
    semester: "5",
    status: "Active",
  },
  {
    id: 3,
    name: "Kiran Kumar",
    usn: "ECE021",
    dept: "ECE",
    semester: "6",
    status: "Inactive",
  },
];

export default function App() {
  const [students] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-10">
          Student Management
        </h1>

        <nav className="space-y-4">
          <div className="bg-gray-800 p-3 rounded-lg cursor-pointer">
            Dashboard
          </div>

          <div className="hover:bg-gray-800 p-3 rounded-lg cursor-pointer">
            Students
          </div>

          <div className="hover:bg-gray-800 p-3 rounded-lg cursor-pointer">
            Attendance
          </div>

          <div className="hover:bg-gray-800 p-3 rounded-lg cursor-pointer">
            Marks
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">

        {/* Top Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Dashboard
          </h2>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Add Student
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Students</p>
                <h3 className="text-3xl font-bold mt-2">
                  {students.length}
                </h3>
              </div>

              <Users size={40} />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Departments</p>
                <h3 className="text-3xl font-bold mt-2">3</h3>
              </div>

              <GraduationCap size={40} />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Attendance</p>
                <h3 className="text-3xl font-bold mt-2">92%</h3>
              </div>

              <CalendarCheck size={40} />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded-2xl shadow mb-6 flex items-center gap-3">

          <Search className="text-gray-500" />

          <input
            type="text"
            placeholder="Search student..."
            className="w-full outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={() => setSearch(query)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Search
          </button>

        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">

          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">USN</th>
                <th className="p-4">Department</th>
                <th className="p-4">Semester</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.usn}</td>
                  <td className="p-4">{student.dept}</td>
                  <td className="p-4">{student.semester}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                    >
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </main>
    </div>
  );
}