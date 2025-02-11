import React from "react";
import ImageCarousel from "../components/ImageCarousal";

const About = () => {
const homeImages = [
  "/images/image3.jpg",
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="mt-4">Learn about our mission, vision, and history.</p>
      <ImageCarousel images={homeImages} />
      <p>
        A nation’s real and sustainable growth is possible with technological
        advancement as well as development of its human resource and the role of
        engineers is immensely pertinent. With globalization, engineers should
        be able to perform in a larger environment and are expected to face
        challenges & find solutions in any given situation. The key to meet the
        demand for such quality engineers remains in providing holistic
        engineering education. Over the last 75 years, B.M.S.C.E has been
        offering best engineering programmes and is benchmarked with the leading
        educational institutions in the Country.
      </p>
    </div>
  );
};

export default About;
