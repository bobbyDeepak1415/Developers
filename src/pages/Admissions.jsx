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
      <h2 className="text-3xl font-bold">Admissions</h2>
      <p className="mt-4">
        Find out about our admission process and requirements.
      </p>
      <ImageCarousel images={homeImages} />
    </div>
  );
};

export default Admissions;
