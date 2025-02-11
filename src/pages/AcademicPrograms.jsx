import React from "react";

const AcademicPrograms = () => {


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Academic Programs
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Explore our diverse academic programs designed to foster excellence
          and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Program Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Bachelor of Science in Computer Science
            </h2>
            <p className="text-gray-600 mt-2">
              A comprehensive program covering software development, AI, and
              data science.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Bachelor of Business Administration
            </h2>
            <p className="text-gray-600 mt-2">
              Equipping students with skills in management, marketing, and
              entrepreneurship.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Mechanical Engineering
            </h2>
            <p className="text-gray-600 mt-2">
              A hands-on program focusing on robotics, thermodynamics, and
              automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicPrograms;
