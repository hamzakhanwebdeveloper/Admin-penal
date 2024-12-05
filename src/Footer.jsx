import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Icons Section */}
        <div className="flex justify-center space-x-6 py-6">
          <a href="#" className="hover:text-gray-400 text-xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-400 text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400 text-xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 py-4 text-center text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
