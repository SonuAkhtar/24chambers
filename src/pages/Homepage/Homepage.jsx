import React from "react";

// import CSS
import "./homepage.css";

import Hero1 from "../../components/Hero1/Hero1";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import HomeSpecial from "../../components/HomeSpecial/HomeSpecial";
import HomeBlog from "../../components/HomeBlog/HomeBlog";
import Query from "../../components/Query/Query";
import Reach from "../../components/Reach/Reach";
import Disclaimer from "../../components/Disclaimer/Disclaimer";

const Homepage = () => {
  return (
    <div className="homepage_container">
      {/* <Disclaimer /> */}
      <Hero1 />
      <Query />
      <Contact />

      {/* <Hero /> */}
      {/* <About />
      <HomeSpecial />
      <HomeBlog /> */}
      {/* <Reach /> */}
    </div>
  );
};

export default Homepage;
