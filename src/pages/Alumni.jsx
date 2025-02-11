import React, { useState } from "react";

const Alumni = () => {
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

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center">Our Alumni</h2>
      <p className="mt-4 text-center text-gray-700">
        Meet our successful alumni who are making a difference in the world.
      </p>

      <h2>
        BMSCE Alumni can be found all over the world. BMSCE takes pride in
        educating students since 1946 in various fields of Engineering and
        continues to provide world-class education with more emphasis on
        research and development.
      </h2>

      {/* Alumni Success Stories with Hover Effect */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((alumni, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center transform transition duration-300  ease-in-out hover:scale-105 hover:shadow-lg"
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
    </div>
  );
};

export default Alumni;
