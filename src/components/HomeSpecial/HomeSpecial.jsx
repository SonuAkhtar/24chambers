import "./homeSpecial.css";

import { specialData } from "../../../appData";

const HomeSpecial = () => {
  return (
    <section className="homeSpecial">
      <div className="section_wrapper">
        <div className="section_header">
          <h1 className="section_title">Legal Services</h1>
          <h3 className="section_subtitle">
            We have expertise in a diverse spectrum of practice areas
          </h3>
        </div>
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

        <div className="homeSpecial_btn_wrapper">
          <button>See all Services</button>
        </div>
      </div>
    </section>
  );
};

export default HomeSpecial;
