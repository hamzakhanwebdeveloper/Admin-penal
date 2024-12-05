import React, { useState } from "react";

const Report = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const reports = [
    { id: 1, type: "Bug", date: "2024-12-05", status: "Pending" },
    { id: 2, type: "Feature Request", date: "2024-12-04", status: "Completed" },
    { id: 3, type: "Bug", date: "2024-12-03", status: "Pending" },
  ];

  // Function to simulate downloading the report
  const handleDownload = (id) => {
    console.log(`Downloading report with ID: ${id}`);
    // Implement your download logic here
  };

  // Filter reports based on search term for ID
  const filteredReports = reports.filter((report) =>
    report.id.toString().includes(searchTerm) // Convert the ID to string for comparison
  );

  return (
    <div className="overflow-x-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="inline-block min-w-full shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr>
              <th colSpan={5} className="px-6 py-3 text-left border-b border-gray-300">
                {/* Flex container for title and search */}
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-gray-800">Reports</div> {/* Title on Left */}
                  <div className="relative w-1/3"> {/* Search bar on Right */}
                    <input
                      type="text"
                      placeholder="Search by Report ID"
                      className="px-4 py-2 border rounded-md text-sm text-gray-700 w-full"
                      onChange={(e) => setSearchTerm(e.target.value)}
                      value={searchTerm}
                    />
                  </div>
                </div>
              </th>
            </tr>
            <tr className="bg-gray-800 text-white">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Report ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredReports.map((report) => (
              <tr key={report.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">{report.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">{report.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">{report.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                  {report.status === "Pending" ? (
                    <span className="text-yellow-500">Pending</span>
                  ) : (
                    <span className="text-green-500">Completed</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                  <button
                    onClick={() => handleDownload(report.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
