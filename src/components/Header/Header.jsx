import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header_container">
      <div className="header_wrapper">
        <div className="header_logo">LOGO</div>
        <div className="header_links">
          <span>
            <Link to="/about-us">About Us</Link>
          </span>
          <span>
            <Link to="/blogs">Blogs</Link>
          </span>
          <span>
            <Link to="/specialisation">Specialisation</Link>
          </span>
          <span>
            <Link to="/services">Services</Link>
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
