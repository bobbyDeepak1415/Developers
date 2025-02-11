import React from "react";
import ImageCarousel from "../components/ImageCarousal";

const EventsNews = () => {
  const homeImages = [
    "/images/image5.jpg",
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image6.jpg",
  ];

  const events = [
    {
      date: "01 Feb",
      title:
        "Grand Challenge Impact Lab (GCIL) with University of Washington: Sessions",
    },
    {
      date: "16 Jan",
      title:
        "UDYAMOTSAV 2025 - On Thursday 16th January 2025 at 9 AM in Auditorium I, PJ Block, BMSCE",
    },
    {
      date: "17 Dec",
      title: "11th Annual Alumni Day - 2024 on Saturday, 21st December, 2024.",
    },
    {
      date: "17 Sep",
      title:
        "B.M.S. College of Engineering and B.M.S. College of Architecture cordially invites you to the Inauguration Function of First Year B.E., & B.Arch for the Academic Year 2024-25 on Friday, 20th September 2024.",
    },
    {
      date: "30 Jul",
      title:
        "Department of Civil Engineering is organizing a One Week Hands-On Faculty Development Programme on 'BIM Application in Civil Engineering and Construction' from 29-7-2024 to 2-8-2024.",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold">Events & News</h2>
      <p className="mt-4">
        Stay updated with the latest news and upcoming events.
      </p>

      {/* Image Carousel */}
      <ImageCarousel images={homeImages} />

      {/* News & Events Section */}
      <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Latest Events</h3>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transform transition hover:scale-105 duration-100 ease-in-out "
            >
              <p className="text-gray-600 font-semibold">{event.date}</p>
              <h4 className="text-lg font-medium mt-1">{event.title}</h4>
              <a
                href="#"
                className="text-blue-600 mt-2 inline-block hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsNews;
