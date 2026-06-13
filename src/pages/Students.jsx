import { useState } from "react";

import SearchBar from "../components/SearchBar";
import StudentTable from "../components/StudentTable";

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

export default function Students() {
  const [students] = useState(initialStudents);

  const [query, setQuery] = useState("");

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* Top Section */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Students
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Add Student
        </button>

      </div>

      {/* Search */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        setSearch={setSearch}
      />

      {/* Student Table */}
      <StudentTable students={filteredStudents} />

    </div>
  );
}