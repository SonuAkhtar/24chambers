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

          <div className="footer_address">
            <span>Address: </span>24 Jangpura ‘A’, 1st Floor, Mathura Road, New
            Delhi-110014
          </div>

          <a className="social" href="">
            <i className="fa-brands fa-linkedin-in" />
          </a>

          {/* <div className="footer_links">
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
          </div> */}
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
