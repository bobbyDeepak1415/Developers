import React from "react";
import ImageCarousel from "../components/ImageCarousal";

const CampusLife = () => {

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
      <h2 className="text-3xl font-bold">Campus Life</h2>
      <p className="mt-4">
        Discover clubs, societies, and facilities available to students.
      </p>
      <ImageCarousel images={homeImages}/>
    </div>
  );
};

export default CampusLife;
