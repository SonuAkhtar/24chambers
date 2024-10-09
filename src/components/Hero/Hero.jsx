// import CSS
import "./hero.css";

// import images
import heroBg from "/Images/assets/hero/hero1.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_bg">
        <img src={heroBg} alt="hero background image" />
      </div>

      <div className="section_wrapper hero">
        <h3 className="hero_subtitle">Need help in your case?</h3>
        <h1 className="hero_title">We Fight for Right</h1>
        <p className="hero_info">
          Experience unwavering commitment and expert guidance at our law firm,
          where your success is our priority. Trust us to protect your future.
        </p>
        <div className="hero_buttons">
          <button>Reach Us</button>
          <button>Send Query</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
