import React from "react";

import Hero from "../../components/Hero/Hero";
import AboutUs from "../../components/AboutUs/AboutUs";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomeSpecial from "../../components/HomeSpecial/HomeSpecial";
import HomeBlog from "../../components/HomeBlog/HomeBlog";
import Query from "../../components/Query/Query";
import Reach from "../../components/Reach/Reach";
import Disclaimer from "../../components/Disclaimer/Disclaimer";

const Homepage = () => {
  return (
    <div className="homepage_container">
      {/* <Disclaimer /> */}
      <Header />
      <Hero />
      <AboutUs />
      <HomeSpecial />
      <HomeBlog />
      <Query />
      <Contact />
      <Reach />
      <Footer />
    </div>
  );
};

export default Homepage;
