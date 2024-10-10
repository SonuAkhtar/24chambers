import { Link } from "react-router-dom";

// import CSS
import "./homeSpecial.css";

// import AppData
import { specialData } from "../../../appData";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const HomeSpecial = () => {
  return (
    <section className="homeSpecial">
      <div className="section_wrapper">
        <SectionHeader
          title="Legal Services"
          subtitle="Our Practice Areas"
          color="light"
        />

        <div className="special_cards">
          {specialData.map((card, index) => (
            <div key={index} className="card_item">
              <div className="card_header">
                <h2 className="card_number">0{card.id}</h2>
                <h3 className="card_title">{card.title}</h3>
              </div>
              <p className="card_info">{card.info}</p>
            </div>
          ))}
        </div>

        <div className="link_button">
          <Link to="/specialisation">
            See All <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSpecial;
