import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaEdit, FaBars } from "react-icons/fa";
import { MdOutlineQuiz, MdWorkOutline, MdAssessment, MdWeb, MdEventAvailable } from "react-icons/md";
import EmailVerification from "../components/EmailVerification";

const Home = () => {
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar starts closed on mobile

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 flex flex-col justify-between transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        } md:w-64`}
      >
        {/* Hamburger Menu (always visible on mobile) */}
        <div className="flex items-center justify-between p-4 md:hidden">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FaBars size={20} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col items-center md:items-start flex-grow">
          {/* Logo / Title */}
          <div className={`p-6 text-center font-bold text-2xl ${isSidebarOpen ? "block" : "hidden"} md:block`}>
            SGGSIE&T Data Collection Portal
          </div>

          {/* Navigation Links with Tooltips */}
          <nav className="mt-10 flex flex-col items-center md:items-start w-full space-y-2">

            <div className="relative group w-full">
              <Link to="/newApplicant" className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md">
                <FaUserPlus />
                <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>New Application</span>
              </Link>
              {/* Tooltip */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-48 bg-gray-800 text-gray-200 text-sm rounded-md p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                Create a new application form
              </div>
            </div>

            <div className="relative group w-full">
              <div
                onClick={() => setShowEmailVerification(true)}
                className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md cursor-pointer"
              >
                <FaEdit />
                <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Change / View Application</span>
              </div>
              {/* Tooltip */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-48 bg-gray-800 text-gray-200 text-sm rounded-md p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                Edit or view your application
              </div>
            </div>

            <div className="relative group w-full">
              <Link to="/aptitude-test" className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md">
                <MdOutlineQuiz />
                <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Aptitude Test</span>
              </Link>
              {/* Tooltip */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-48 bg-gray-800 text-gray-200 text-sm rounded-md p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                Take the aptitude test
              </div>
            </div>

            <div className="relative group w-full">
              <a
                href="https://www.glassdoor.co.in/Community/index.html"
                className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdWorkOutline />
                <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Internships</span>
              </a>
              {/* Tooltip */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-48 bg-gray-800 text-gray-200 text-sm rounded-md p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                Explore internship opportunities
              </div>
            </div>

            <div className="relative group w-full">
              <a
                href="https://sggsplacements.in/"
                className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdAssessment />
                <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Placement Report</span>
              </a>
              {/* Tooltip */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-48 bg-gray-800 text-gray-200 text-sm rounded-md p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                View placement reports
              </div>
            </div>

            <div className="relative group w-full">
              <a
                href="https://iccpm.com/training-development/online-workshop-webinars/"
                className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdWeb />
                <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Workshop/Webinar</span>
              </a>
              {/* Tooltip */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-48 bg-gray-800 text-gray-200 text-sm rounded-md p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                Join our workshops/webinars
              </div>
            </div>

            <div className="relative group w-full">
              <a
                href="https://www.sggs.ac.in/"
                className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEventAvailable />
                <span className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>Achievements</span>
              </a>
              {/* Tooltip */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-48 bg-gray-800 text-gray-200 text-sm rounded-md p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                View latest achievements
              </div>
            </div>

            <Link to="/newApplicant" className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md">
              <FaUserPlus />
              <span className={`${isSidebarOpen ? 'block' : 'hidden'} md:block`}>New Application</span>
            </Link>

            <div onClick={() => setShowEmailVerification(true)} className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md cursor-pointer">
              <FaEdit />
              <span className={`${isSidebarOpen ? 'block' : 'hidden'} md:block`}>Change / View Application</span>
            </div>

            <Link to="/aptitude-test" className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md">
              <MdOutlineQuiz />
              <span className={`${isSidebarOpen ? 'block' : 'hidden'} md:block`}>Aptitude Test</span>
            </Link>

            <a href="https://www.glassdoor.co.in/Community/index.html" className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md" target="_blank" rel="noopener noreferrer">
              <MdWorkOutline />
              <span className={`${isSidebarOpen ? 'block' : 'hidden'} md:block`}>Internships</span>
            </a>

            <a href="https://sggsplacements.in/" className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md" target="_blank" rel="noopener noreferrer">
              <MdAssessment />
              <span className={`${isSidebarOpen ? 'block' : 'hidden'} md:block`}>Placement Report</span>
            </a>

            <a href="https://iccpm.com/training-development/online-workshop-webinars/" className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md" target="_blank" rel="noopener noreferrer">
              <MdWeb />
              <span className={`${isSidebarOpen ? 'block' : 'hidden'} md:block`}>Workshop/Webinar</span>
            </a>

            <a href="https://www.sggs.ac.in/" className="w-full flex items-center space-x-2 p-3 hover:bg-gray-700 rounded-md" target="_blank" rel="noopener noreferrer">
              <MdEventAvailable />
              <span className={`${isSidebarOpen ? 'block' : 'hidden'} md:block`}>Achievements</span>
            </a>

          </nav>
        </div>

        {/* Footer */}
        <div className={`${isSidebarOpen ? "block" : "hidden"} md:block p-6 text-sm text-center text-gray-500`}>
          &copy; 2024 SGGSIE&T | T&P Cell | All Rights Reserved
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-gray-900 p-5 md:p-20">
        {showEmailVerification ? (
          <EmailVerification />
        ) : (
          <img src="/home.jpg" alt="Home Illustration" className="rounded-lg shadow-lg max-w-full max-h-full" />
        )}
      </div>
    </div>
  );
};

export default Home;
