import React from "react";

import Hero from "../../components/Hero/Hero";
import AboutUs from "../../components/AboutUs/AboutUs";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <div className="homepage_container">
      <Hero />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
