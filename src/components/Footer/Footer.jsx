import { Link } from "react-router-dom";

// import CSS
import "./footer.css";

// import Images
import logoImage from "/Images/assets/23chambers_logo.jpg";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        <div className="footer_top">
          <div className="footer_top_left">
            <div className="footer_logo">
              <img src={logoImage} alt="logo" />
            </div>
            <div className="footer_city">New Delhi | Jaipur</div>
            <div className="footer_connect">
              <h3>Connect with us:</h3>

              <div className="footer_email_linkedin">
                Email:
                <a href="mailto:office@24chambers.in" className="email">
                  office@24chambers.in
                </a>
              </div>
              <a
                href="https://www.linkedin.com/company/24-chambers/about/?viewAsMember=true"
                className="linkedin"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="footer_top_right">
            <h3>Access Links</h3>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/specialisation">Specialization</Link>
              </li>
              <li>
                <Link to="/#query">Query</Link>
              </li>
              <li>
                <Link to="/#locations">Locations</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="name">24 Chambers, 2024-2025</div>

          <div className="copyright">
            <span>&#169;</span> All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
