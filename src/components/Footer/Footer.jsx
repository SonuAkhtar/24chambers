import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        <div className="footer_top">
          <div className="logo">LOGO</div>

          <div className="footer_links">
            <div className="footer_link_item">
              <h2>Services</h2>
              <div className="links">
                <span>Link 1</span>
                <span>Link 1</span>
                <span>Link 1</span>
              </div>
            </div>
            <div className="footer_link_item">
              <h2>Expertise</h2>
              <div className="links">
                <span>Link 1</span>
                <span>Link 1</span>
                <span>Link 1</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer_bottom">
          <div className="copyright">
            24 Chambers | <span>&#169;</span> All rights reserved 2024
          </div>
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
          <div className="footer_resourse">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Cookies</span>
            <span>License</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
