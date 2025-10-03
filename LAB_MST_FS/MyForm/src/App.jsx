import { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [entries, setEntries] = useState([]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, formData]);
    setFormData({ name: "", email: "", course: "" });
  };

  return (
    <div className="app-container min-h-screen p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        🎓 Student Registration
      </h1>

      {/* Form Card */}
      <div className="form-card w-full p-6 rounded-xl shadow-lg bg-white max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="course"
            placeholder="Enter Course"
            value={formData.course}
            onChange={handleChange}
            className="input-field"
            required
          />
          <button
            type="submit"
            className="submit-btn col-span-1 md:col-span-3"
          >
            🚀 Submit
          </button>
        </form>
      </div>

      {/* Entries Table */}
      {entries.length > 0 && (
        <div className="table-container mt-8 w-full max-w-7xl mx-auto rounded-xl shadow-lg bg-white overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="table-header">
                <th className="p-4">#</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Course</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}
                >
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{entry.name}</td>
                  <td className="p-4">{entry.email}</td>
                  <td className="p-4">{entry.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
