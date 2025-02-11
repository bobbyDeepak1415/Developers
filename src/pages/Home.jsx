import React from "react";
import ImageCarousel from "../components/ImageCarousal";

const Home = () => {

  const homeImages = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg"
  ];
  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold">Welcome to Our College</h2>
      <p className="mt-4">Shaping the Future of Education</p>
      <ImageCarousel images={homeImages}/>
    </div>
  );
};

export default Home;
