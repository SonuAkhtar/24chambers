// import CSS
import "./specialisation.css";

// import Components
import SectionHeader from "../../components/SectionHeader/SectionHeader";

// import appData
import { specialData } from "../../../appData";
import SpecialCard from "../../components/SpecialCard/SpecialCard";

const Specialisation = () => {
  return (
    <div className="specialisation">
      <div className="specialisation_wrapper">
        <SectionHeader title="Specialisation" />

        <main>
          {specialData.map((data) => (
            <SpecialCard
              icon={data.icon}
              title={data.title}
              subtitle={data.subtitle}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Specialisation;
