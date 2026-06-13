export default function StudentTable({ students }) {
  return (
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

          {students.map((student) => (
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
                  className={`px-3 py-1 rounded-full text-sm ${
                    student.status === "Active"
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
  );
}