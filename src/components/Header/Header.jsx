import { Link } from "react-router-dom";
import "./header.css";

//import logoImage from "../../assets/23chambers_logo.jpg";
//import logoImage from "../../assets/23chambers_logo-nobg.png";
import logoImage from "../../assets/23chambers_logo-new.jpg";

const Header = () => {
  return (
    <header className="header_container">
      <div className="header_wrapper">
        <a className="header_logo" href="#hero">
          <img src={logoImage} alt="header logo" />
        </a>

        <div className="header_links">
          <span>
            <Link to="/about-us">About Us </Link>
            <i class="fa-solid fa-chevron-right" />
          </span>
          <span>
            <Link to="/specialisation">Specialisation</Link>
            <i class="fa-solid fa-chevron-right" />
          </span>
          <span>
            <Link to="/blogs">Blogs</Link>
          </span>
          <span>
            <a href="#reach">Reach us</a>
          </span>
        </div>
        <div className="header_button">
          <button>Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
