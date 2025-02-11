import React from "react";

const FacultyPortal = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">
        Faculty Portal
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          📖 Teaching Resources
        </h2>
        <ul className="list-disc ml-5 mt-2 text-gray-600">
          <li>Lecture Slides</li>
          <li>Research Papers</li>
          <li>Student Assessment Guidelines</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700">
          📌 Course Management
        </h2>
        <p className="text-gray-600">Manage student enrollments and grading.</p>
      </section>
    </div>
  );
};

export default FacultyPortal;
