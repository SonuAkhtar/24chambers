import { useState } from "react";
import { Link } from "react-router-dom";

// import CSS
import "./header.css";

// import Components
import Hamburger from "../Hamburger/Hamburger";

// import Images
import logoImage from "/Images/assets/23chambers_logo.jpg";

const Header = () => {
  const [burgerClick, setBurgerClick] = useState(false);

  return (
    <header className="header_container">
      <div className="header_wrapper">
        <Link to="/">
          <img className="header_logo" src={logoImage} alt="header logo" />
        </Link>

        <Hamburger burgerClick={burgerClick} setBurgerClick={setBurgerClick} />

        <div className={`header_links ${burgerClick ? "active" : ""}`}>
          <span>
            <Link to="/about-us">About Us </Link>
            <i className="fa-solid fa-chevron-right" />

            <div className="header_link_items">
              <Link to="/about-us">Founders</Link>
              <Link to="/about-us">Team Members</Link>
            </div>
          </span>
          <span>
            <Link to="/specialisation">Specialisation</Link>
            <i className="fa-solid fa-chevron-right" />

            <div className="header_link_items">
              <Link to="/about-us">Litigation</Link>
              <Link to="/about-us">Dispute Resolution</Link>
            </div>
          </span>
          <span>
            <Link to="/blogs">Blogs</Link>
          </span>
          <span>
            <a href="#reach">Reach us</a>
          </span>
        </div>
        <div className={`header_button ${burgerClick ? "active" : ""}`}>
          <button>Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
