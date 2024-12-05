import { useState } from "react";
import { FaBars, FaTimes, FaBell, FaSearch, FaUser, FaCog, FaChartBar, FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const [isSmallScreenSearchOpen, setIsSmallScreenSearchOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close the sidebar when the close button is clicked
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsNotificationDropdownOpen(false);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsProfileDropdownOpen(false);
  };

  const toggleSmallScreenSearch = () => {
    setIsSmallScreenSearchOpen(!isSmallScreenSearchOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-gray-100 text-black shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:sticky md:top-0`}
      >
        <div className="p-4 text-2xl font-bold flex items-center">
          Admin Panel
          <button
            className="ml-auto text-2xl text-gray-600 md:hidden"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="mt-4 space-y-2 text-lg font-semibold">
          <li className="flex items-center px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer">
            <FaHome className="mr-2 text-xl" />
            <Link to="/dashboard" onClick={closeSidebar}>
              Dashboard
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer">
            <FaUser className="mr-2 text-xl" />
            <Link to="/user" onClick={closeSidebar}>
              User
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer">
            <FaCog className="mr-2 text-xl" />
            <Link to="/settings" onClick={closeSidebar}>
              Settings
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer">
            <FaChartBar className="mr-2 text-xl" />
            <Link to="/report" onClick={closeSidebar}>
              Reports
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-grow overflow-hidden">
        {/* Navbar */}
        <nav className="sticky top-0 z-10 bg-gray-100 shadow px-4 py-2 flex items-center justify-between">
          {/* Sidebar Toggle */}
          <button
            className="text-gray-800 text-2xl md:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Title */}
          <h1 className="text-lg xl:text-2xl font-semibold text-gray-800">Admin Dashboard</h1>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            {/* Large Screen Search */}
            <div className="hidden sm:flex items-center bg-gray-200 rounded-full px-3 py-2 w-full sm:w-96">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none ml-2 text-sm w-full"
              />
            </div>

            {/* Small Screen Search */}
            <div className="sm:hidden relative">
              <button
                className="text-gray-700 text-xl"
                onClick={toggleSmallScreenSearch}
              >
                <FaSearch />
              </button>
              {isSmallScreenSearchOpen && (
                <div className="absolute -right-12 top-full mt-3  w-64 bg-white shadow-lg rounded p-2">
                  <div className="flex items-center bg-gray-200 rounded-full px-3 py-2">
                    <FaSearch className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-transparent outline-none ml-2 text-sm w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <div className="relative">
              <button
                className="text-gray-700 text-xl"
                onClick={toggleNotificationDropdown}
              >
                <FaBell />
              </button>
              {isNotificationDropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded w-40">
                  <li className="px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer">
                    Notification 1
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer">
                    Notification 2
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer">
                    Notification 3
                  </li>
                </ul>
              )}
            </div>

            {/* Profile Icon */}
            <div className="relative">
              <div
                className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 cursor-pointer"
                onClick={toggleProfileDropdown}
              >
                {/* Change this to any icon you want */}
                <FaUser className="w-full h-full text-gray-500" />
              </div>
              {isProfileDropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded w-40">
                  <li className="px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-700 hover:text-white cursor-pointer">
                    <button>Logout</button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
