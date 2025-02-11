import React from "react";
import ImageCarousel from "../components/ImageCarousal";

const EventsNews = () => {

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
      <h2 className="text-3xl font-bold">Events & News</h2>
      <p className="mt-4">
        Stay updated with the latest news and upcoming events.
      </p>
      <ImageCarousel images={homeImages}/>
    </div>
  );
};

export default EventsNews;
