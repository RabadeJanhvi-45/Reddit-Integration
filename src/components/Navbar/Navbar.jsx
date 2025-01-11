import React from 'react';
import { FaHome, FaBell, FaEnvelope, FaUser } from 'react-icons/fa';
import './Navbar.css'; 
import reactLogo from "../../assets/reddit-1.svg";

const Navbar = () => {
  return (
    <nav className="navbar bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="navbar-logo flex items-center space-x-4">
        <img
          src={reactLogo}
          alt="Reddit Logo"
          
          height={50}
          width={100}
        />
       
      </div>

      {/* Navigation Links */}
      <div className="navbar-links flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <FaHome className="text-gray-600" />
          <span className="text-gray-600 font-medium">Home</span>
        </div>
        
        <button className="text-gray-600 font-medium">Popular</button>
        <button className="text-gray-600 font-medium">All</button>
      </div>

      {/* Search Box */}
      <div className="navbar-search flex-grow max-w-md mx-4">
        <input
          type="text"
          placeholder="Find Community or Post"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Action Buttons */}
      <div className="navbar-actions flex items-center space-x-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600">
          Create Post
        </button>
        <FaBell className="text-gray-600 w-6 h-6 cursor-pointer" />
        <FaEnvelope className="text-gray-600 w-6 h-6 cursor-pointer" />
        <FaUser className="text-gray-600 w-6 h-6 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
