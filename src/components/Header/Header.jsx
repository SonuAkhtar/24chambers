import "./header.css";

const Header = () => {
  return (
    <header className="header_container">
      <div className="header_wrapper">
        <div className="header_logo">LOGO</div>
        <div className="header_links">
          <span>
            <a href="#">About us</a>
          </span>
          <span>
            <a href="#">Services</a>
          </span>

          <span>
            <a href="#">Works</a>
          </span>

          <span>
            <a href="#">Expertise</a>
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
