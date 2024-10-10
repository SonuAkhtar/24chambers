// import CSS
import "./reach.css";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const Reach = () => {
  return (
    <section className="reach">
      <div className="section_wrapper reach">
        <SectionHeader title="Reach Us" subtitle="Meet in-Person" />

        <main className="reach_main">
          <div className="address">
            <i className="fa-solid fa-location-dot" />
            <span>
              24 Jangpura ‘A’, First Floor, Mathura Road, New Delhi – 110014.
            </span>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.596897786442!2d77.2495421260151!3d28.5818649363787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3000b78e23f%3A0x97fa2575e07b8eee!2sKhosla%20Residence%2C%2015%20Jangpura%20B%2C%20Mathura%20Road%2C%20New%20Delhi%20110014!5e0!3m2!1sen!2sin!4v1728530750860!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Reach;
