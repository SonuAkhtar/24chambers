import { useState } from "react";
import { Link } from "react-router-dom";

// import CSS
import "./header.css";

// import Components
import Hamburger from "../Hamburger/Hamburger";
import AnchorButton from "../AnchorButton/AnchorButton";

// import Images
import logoImage from "/Images/assets/23chambers_logo.jpg";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLinksClick = (e) => {
    if (e.target.tagName === "A") setMobileMenu(false);
  };

  return (
    <header className={`header_container ${mobileMenu ? "active" : ""}`}>
      <div className="header_wrapper">
        <Link to="/">
          <img src={logoImage} alt="logo" />
        </Link>

        <Hamburger mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

        <div className="header_links" onClick={handleLinksClick}>
          <span>
            <Link to="/about-us">About Us</Link>
            {/* About Us
            <i className="fa-solid fa-chevron-right" />
            <div className="header_link_items">
              <Link to="/leadership">The Firm & its Leadership</Link>
              <Link to="/team">The Team</Link>
            </div> */}
          </span>
          <span className="link_separator"></span>
          <span>
            Specialisation
            <i className="fa-solid fa-caret-down" />
            <div className="header_link_items">
              <Link to="/about-us">Litigation</Link>
              <Link to="/about-us">Dispute Resolution</Link>
            </div>
          </span>
          <span className="link_separator"></span>

          <span>
            <Link to="/blogs">Blog & Published Works</Link>
          </span>
          <span className="link_separator"></span>

          <span>
            <a href="#reach">Contact Us</a>
          </span>
          <span className="link_separator"></span>

          <AnchorButton text="Submit Your Query" id="#query" />
        </div>
      </div>
    </header>
  );
};

export default Header;
