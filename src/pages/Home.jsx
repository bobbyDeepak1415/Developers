import React from "react";
import ImageCarousel from "../components/ImageCarousal";

const Home = () => {

  const homeImages = [
    "/images/campus3.jpg",
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
      <p>
        B.M.S. College of Engineering (BMSCE) was Founded in the year 1946 by
        Late Sri. B. M. Sreenivasaiah a great visionary and philanthropist and
        nurtured by his illustrious son Late Sri. B. S. Narayan. BMSCE is the
        first private sector initiative in engineering education in India. BMSCE
        has completed 70+ years of dedicated service in the field of Engineering
        Education. Started with only 03 undergraduate courses, BMSCE today
        offers 13 Undergraduate & 16 Postgraduate courses both in conventional
        and emerging areas.
      </p>
      <ImageCarousel images={homeImages} />
    </div>
  );
};

export default Home;
