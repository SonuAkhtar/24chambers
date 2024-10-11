// import CSS
import "./homeSpecial.css";

// import AppData
import { specialData } from "../../../appData";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";
import LinkButton from "../LinkButton/LinkButton";

const HomeSpecial = () => {
  return (
    <section className="homeSpecial_section" id="homeSpecial">
      <main>
        <SectionHeader
          title="Legal Services"
          subtitle="Our Practice Areas"
          color="light"
        />

        <div className="specialCards_wrapper">
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

        <LinkButton link="/specialisation" text="See All" />
      </main>
    </section>
  );
};

export default HomeSpecial;
