

import React from "react";
import ImageCarousel from "../components/ImageCarousal";

const Admissions = () => {
  const homeImages = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
  ];
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center">Admissions</h2>
      <p className="mt-4 text-center text-gray-700">
        Join us and take the first step toward a brighter future.
      </p>

      {/* Image Carousel */}
      <ImageCarousel images={homeImages} />

      {/* Admission Process */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold">Admission Process</h3>
        <ul className="list-decimal list-inside mt-3 space-y-2 text-gray-700">
          <li>Fill out the online application form.</li>
          <li>Ensure you meet the eligibility criteria.</li>
          <li>Submit the required documents.</li>
          <li>Attend an interview or entrance test (if applicable).</li>
          <li>Receive admission confirmation and pay the fees.</li>
        </ul>
      </section>

      {/* Online Application Form */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold">Online Application Form</h3>
        <form
          action="https://formspree.io/f/example"
          method="POST"
          className="mt-4 p-6 bg-gray-100 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Upload Documents (PDF)</label>
            <input
              type="file"
              name="documents"
              accept="application/pdf"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Fee Structure */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold">Fee Structure</h3>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Category</th>
              <th className="border p-2">Amount (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Tuition Fee</td>
              <td className="border p-2">₹1,00,000 per year</td>
            </tr>
            <tr>
              <td className="border p-2">Hostel Fee</td>
              <td className="border p-2">₹50,000 per year</td>
            </tr>
            <tr>
              <td className="border p-2">Library & Other Charges</td>
              <td className="border p-2">₹10,000 per year</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Scholarships & Financial Aid */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold">Scholarships & Financial Aid</h3>
        <p className="mt-3 text-gray-700">
          Our college offers various scholarships and financial aid programs to
          support deserving students.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
          <li>Merit-Based Scholarships</li>
          <li>Need-Based Financial Aid</li>
          <li>Sports Scholarships</li>
          <li>Government Schemes for Reserved Categories</li>
        </ul>
      </section>
    </div>
  );
};

export default Admissions;


// const homeImages = [
//   "/images/image1.jpg",
//   "/images/image2.jpg",
//   "/images/image3.jpg",
//   "/images/image4.jpg",
//   "/images/image5.jpg",
//   "/images/image6.jpg",
// ];