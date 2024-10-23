import React from "react";

// import CSS
import "./homepage.css";

import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import Query from "../../components/Query/Query";

const Homepage = () => {
  return (
    <div className="homepage_container">
      <Hero />
      <Query />
      <Contact />
    </div>
  );
};

export default Homepage;
