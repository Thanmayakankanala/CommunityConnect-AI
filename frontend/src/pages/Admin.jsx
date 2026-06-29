import { useEffect, useState } from "react";
import {
FaMapMarkerAlt,
FaFlag,
FaClipboardList,
FaCheckCircle
} from "react-icons/fa";
import {
  getReports,
  updateReportStatus,
  deleteReport,
} from "../services/firestoreService";

function Admin() {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
  console.log("Loading reports...");

  const data = await getReports();

  console.log("Reports received:", data);

  setReports(data);
};
  const resolveReport = async (id) => {
    await updateReportStatus(id, "Resolved");
    loadReports();
  };

  const removeReport = async (id) => {
    await deleteReport(id);
    loadReports();
  };

  const filtered = reports.filter((report) =>
    report.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-16 px-8">

      <h1 className="text-5xl font-bold mb-10">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-3 gap-6 mb-10">

  <div className="bg-blue-600 text-white rounded-xl p-6">

    <h2 className="text-4xl font-bold">
      {reports.length}
    </h2>

    <p>Total Reports</p>

  </div>

  <div className="bg-red-500 text-white rounded-xl p-6">

    <h2 className="text-4xl font-bold">
      {reports.filter(r => r.status === "Pending").length}
    </h2>

    <p>Pending</p>

  </div>

  <div className="bg-green-500 text-white rounded-xl p-6">

    <h2 className="text-4xl font-bold">
      {reports.filter(r => r.status === "Resolved").length}
    </h2>

    <p>Resolved</p>

  </div>

</div>

      <input
  type="text"
  placeholder="🔍 Search by title, category or status..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full p-5 text-lg border-2 border-gray-300 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition mb-10"
/>

      <div className="space-y-8">

  {filtered.map((report) => (

    <div
      key={report.id}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 p-8"
    >

      <h2 className="text-3xl font-bold mb-4">
        {report.title}
      </h2>

      <p className="flex items-center gap-2 mb-3">
        <FaFlag className="text-blue-600" />
        <b>Category:</b>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {report.category}
        </span>
      </p>

      <p className="flex items-center gap-2 mb-3">
        <FaClipboardList className="text-red-500" />

        <b>Priority:</b>

        <span
          className={`px-3 py-1 rounded-full text-white ${
            report.priority === "High"
              ? "bg-red-500"
              : report.priority === "Medium"
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        >
          {report.priority}
        </span>
      </p>

      <p className="flex items-center gap-2 mb-3">
        <FaMapMarkerAlt className="text-red-600" />

        <b>Location:</b>

        {report.location}
      </p>

      <p className="mb-3">
        <b>Description:</b> {report.description}
      </p>

      <p className="text-gray-500 mb-3">
        Submitted:
        {" "}
        {report.createdAt?.seconds
          ? new Date(report.createdAt.seconds * 1000).toLocaleString()
          : "Just Now"}
      </p>

      <p className="flex items-center gap-2 mb-6">
        <FaCheckCircle className="text-green-600" />

        <b>Status:</b>

        <span
          className={`font-bold ${
            report.status === "Resolved"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {report.status}
        </span>
      </p>

      <div className="flex gap-4">

        <button
          onClick={() => resolveReport(report.id)}
          disabled={report.status === "Resolved"}
          className={`px-6 py-3 rounded-lg text-white ${
            report.status === "Resolved"
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {report.status === "Resolved"
            ? "Resolved ✓"
            : "Resolve"}
        </button>

        <button
          onClick={() => removeReport(report.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
        >
          Delete
        </button>

      </div>

    </div>

  ))}

  </div>
  </div>
    
  );
}

export default Admin;