import React from "react";
import ImageCarousel from "../components/ImageCarousal";

const About = () => {
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
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="mt-4">Learn about our mission, vision, and history.</p>
      <ImageCarousel images={homeImages}/>
    </div>
  );
};

export default About;
