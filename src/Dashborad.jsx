import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faUsers, faChartLine, faEye, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Line, Bar } from "react-chartjs-2"; 
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  BarElement, 
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import Footer from './Footer';

// Register Chart.js modules
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  BarElement, 
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  const tableData = [
    { name: "Product A", productId: "12345", price: "$100", quantity: 20, revenue: "$2000", status: "In Stock" },
    { name: "Product B", productId: "12346", price: "$50", quantity: 10, revenue: "$500", status: "Low Stock" },
    { name: "Product C", productId: "12347", price: "$25", quantity: 0, revenue: "$0", status: "Out of Stock" },
    // Add more data as needed
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock":
        return "text-green-600";
      case "Low Stock":
        return "text-yellow-600";
      case "Out of Stock":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const filteredData = tableData.filter((row) =>
    row.productId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const growthData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Growth Rate",
        data: [10, 25, 15, 30, 45, 50, 65],
        borderColor: "#4F46E5", 
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        pointBackgroundColor: "#4F46E5",
        pointBorderColor: "#4F46E5",
        tension: 0.4, 
      },
    ],
  };

  const earningsData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Earnings",
        data: [500, 700, 800, 1000, 1200, 1500, 1800],
        borderColor: "#10B981", 
        backgroundColor: "rgba(16, 185, 129, 0.6)", 
        tension: 0.4, 
      },
    ],
  };

  const growthOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#4B5563", 
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#6B7280", 
        },
      },
      y: {
        ticks: {
          color: "#6B7280", 
        },
      },
    },
  };

  const earningsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#374151", 
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#4B5563", 
        },
      },
      y: {
        ticks: {
          color: "#4B5563", 
        },
      },
    },
  };

  return (
    <div className="p-6">
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Total Sales Card */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between">
          <div className="mr-4">
            <FontAwesomeIcon icon={faChartLine} className="h-8 w-8 text-blue-500" />
          </div>
          <div>
            <div className="text-xl font-semibold text-gray-800">Total Sales</div>
            <p className="text-2xl font-bold text-gray-800">$1,234</p>
          </div>
        </div>

        {/* Total Income Card */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between">
          <div className="mr-4">
            <FontAwesomeIcon icon={faDollarSign} className="h-8 w-8 text-green-500" />
          </div>
          <div>
            <div className="text-xl font-semibold text-gray-800">Total Income</div>
            <p className="text-2xl font-bold text-gray-800">$987,654</p>
          </div>
        </div>

        {/* Total Users Card */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between">
          <div className="mr-4">
            <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-indigo-500" />
          </div>
          <div>
            <div className="text-xl font-semibold text-gray-800">Total Users</div>
            <p className="text-2xl font-bold text-gray-800">1,234</p>
          </div>
        </div>

        {/* Total Visits Card */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between">
          <div className="mr-4">
            <FontAwesomeIcon icon={faEye} className="h-8 w-8 text-yellow-500" />
          </div>
          <div>
            <div className="text-xl font-semibold text-gray-800">Total Visits</div>
            <p className="text-2xl font-bold text-gray-800">45,678</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-6 border">
        {/* Table Title and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-700">Product Overview</h2>
          <div className="relative mt-2 md:mt-0 ">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by Product ID..."
              className="pl-10 pr-4 py-2  border rounded-lg "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <table className="min-w-full table-auto border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Product ID</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Price</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Quantity</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Revenue</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-300 hover:bg-gray-100"
                >
                  <td className="py-3 px-4 text-sm text-gray-800">{row.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{row.productId}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{row.price}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{row.quantity}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{row.revenue}</td>
                  <td
                    className={`py-3 px-4 text-sm font-semibold ${getStatusColor(
                      row.status
                    )}`}
                  >
                    {row.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-4 px-4 text-center text-gray-500"
                >
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Growth Rate</h2>
          <div className="relative h-72">
            <Line data={growthData} options={growthOptions} />
          </div>
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Earnings</h2>
          <div className="relative h-72">
            <Bar data={earningsData} options={earningsOptions} />
          </div>
        </div>
      </div>
      <br />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
