import React from "react";

const StudentPortal = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Student Portal</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          📚 Course Materials
        </h2>
        <ul className="list-disc ml-5 mt-2 text-gray-600">
          <li>Lecture Notes (PDF)</li>
          <li>Course Syllabus</li>
          <li>Assignment Guidelines</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700">
          📢 Announcements
        </h2>
        <ul className="list-disc ml-5 mt-2 text-gray-600">
          <li>Upcoming Exam Schedule</li>
          <li>New Campus Event</li>
        </ul>
      </section>
    </div>
  );
};

export default StudentPortal;
