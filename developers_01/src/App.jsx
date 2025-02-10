import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import AcademicPrograms from "./pages/AcademicPrograms";
import CampusLife from "./pages/CampusLife";
import EventsNews from "./pages/EventsNews";
import Contact from "./pages/Contact";
import Alumni from "./pages/Alumni";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/programs" element={<AcademicPrograms />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/events-news" element={<EventsNews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
