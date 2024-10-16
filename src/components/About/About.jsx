// import CSS
import "./about.css";

// import Images
import aboutImage from "/Images/assets/about/Picture1.jpg";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";
import LinkButton from "../LinkButton/LinkButton";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about_section" id="homeAbout">
      <main>
        <SectionHeader title="Who are We" subtitle="About Us" />

        <div className="about_wrapper">
          <div className="about_left">
            <img src={aboutImage} alt="about us image" />
          </div>
          <div className="about_right">
            <h2 className="about_right_title">
              Welcome to <span>24</span> Chambers
            </h2>
            <p className="about_right_info">
              The present law firm “24 Chambers” originates with the foundation
              laid by Late Shri S.C. Nigam, Advocate, who set up and established
              his chamber at 24, Jangpura 'A', Mathura Road New Delhi in 1975.
              Shri S.C. Nigam attained the degree of Bachelor of Arts (Commerce
              Group). and LL.B. Thereafter, he enrolled as an Advocate with the
              Bar Council of Delhi in the year 1958. He joined the chambers of
              Late Shri Shiv Narain Shankar who was later elevated as a Judge,
              Delhi High Court. He was also associated with other eminent
              jurists like Late Shri Sardar Bahadur. Shri S.C. Nigam was a
              renowned expert in Civil Laws with a specialised practice in
              Property Law and Electricity Laws. He was the Standing Counsel and
              Legal Advisor for New Delhi Municipal Committee (now, New Delhi
              Municipal Council).
            </p>

            <div className="about_right_sign">24 Chambers</div>
          </div>
        </div>

        <LinkButton link="/about-us" text="Know More" color="dark" />
      </main>
    </section>
  );
};

export default About;
