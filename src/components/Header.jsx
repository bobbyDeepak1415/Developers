import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">College Name</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:underline">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/academic-programs" className="hover:underline">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/campus-life" className="hover:underline">
                Campus Life
              </Link>
            </li>
            <li>
              <Link to="/events-news" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/alumni" className="hover:underline">
                Alumni
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
