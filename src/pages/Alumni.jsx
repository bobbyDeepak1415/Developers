import React, { useState } from "react";

const Alumni = () => {
  // Sample Alumni Success Stories
  const testimonials = [
    {
      name: "Amit Sharma",
      batch: "2015",
      position: "Software Engineer at Google",
      quote:
        "My time at this college laid the foundation for my career. The faculty and curriculum truly prepared me for the real world.",
      image: "/images/image1.jpg",
    },
    {
      name: "Priya Verma",
      batch: "2017",
      position: "Data Scientist at Microsoft",
      quote:
        "The college provided me with great opportunities and hands-on learning that helped me land my dream job.",
      image: "/images/image2.jpg",
    },
    {
      name: "Rahul Mehta",
      batch: "2018",
      position: "Entrepreneur & Startup Founder",
      quote:
        "The knowledge and network I built during my college years have been invaluable for my entrepreneurial journey.",
      image: "/images/image3.jpg",
    },
    {
      name: "Anshul Mehta",
      batch: "2018",
      position: "Entrepreneur & Startup Founder",
      quote:
        "The knowledge and network I built during my college years have been invaluable for my entrepreneurial journey.",
      image: "/images/image4.jpg",
    },
    {
      name: "David Singh",
      batch: "2018",
      position: "Entrepreneur & Startup Founder",
      quote:
        "The knowledge and network I built during my college years have been invaluable for my entrepreneurial journey.",
      image: "/images/image1.jpg",
    },
  ];

  // Alumni Registration Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    batch: "",
    profession: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("alumniData", JSON.stringify(formData));
    alert("Registration successful! Your details have been saved.");
    setFormData({ name: "", email: "", batch: "", profession: "" });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center">Our Alumni</h2>
      <p className="mt-4 text-center text-gray-700">
        Meet our successful alumni who are making a difference in the world.
      </p>

      {/* Alumni Success Stories */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((alumni, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <img
              src={alumni.image}
              alt={alumni.name}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-3">{alumni.name}</h3>
            <p className="text-gray-500">{alumni.batch} Batch</p>
            <p className="text-sm text-gray-700">{alumni.position}</p>
            <p className="mt-3 italic text-gray-600">"{alumni.quote}"</p>
          </div>
        ))}
      </section>

      {/* Alumni Registration Form */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold">Alumni Registration</h3>
        <p className="text-gray-700 mt-2">
          If you are a former student, fill out your details to stay connected.
        </p>
        <form
          className="mt-4 p-6 bg-gray-100 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Batch Year</label>
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Current Profession</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
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
    </div>
  );
};

export default Alumni;

// const homeImages = [
//   "/images/image1.jpg",
//   "/images/image2.jpg",
//   "/images/image3.jpg",
//   "/images/image4.jpg",
//   "/images/image5.jpg",
//   "/images/image6.jpg",
// ];
