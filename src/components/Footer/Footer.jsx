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
          <Link to="/">
            <img className="footer_logo" src={logoImage} alt="header logo" />
          </Link>

          <div className="footer_links">
            <div className="footer_link_item">
              <h2>Specialisation</h2>
              <div className="links">
                <span>Litigation</span>
                <span>Dispute Resolution</span>
              </div>
            </div>

            <div className="footer_link_item">
              <h2>About Us</h2>
              <div className="links">
                <span>Founders</span>
                <span>Team Members</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer_bottom">
          <div className="socials">
            <span>
              <i className="fa-brands fa-facebook-f" />
            </span>
            <span>
              <i className="fa-brands fa-linkedin-in" />
            </span>
            <span>
              <i className="fa-brands fa-x-twitter" />
            </span>
          </div>
          <div className="footer_address">
            <span>Address: </span>24 Jangpura ‘A’, 1st Floor, Mathura Road, New
            Delhi-110014
          </div>

          <div className="copyright">
            24 Chambers | <span>&#169;</span> All rights reserved 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
