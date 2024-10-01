import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./aboutUs.css";

const AboutUs = () => {
  return (
    <section className="aboutUs" id="aboutUs">
      <div className="aboutUs_container">
        <div className="right">
          <h1 className="title">Think outside the square space</h1>
          <div className="weDo">
            <span className="line"></span>
            <h2 className="subtitle">Who we are</h2>
          </div>
          <p className="desc">
            a creative group of designers and developers with a passion for the
            arts.
          </p>
          <button className="btn">See our works</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
