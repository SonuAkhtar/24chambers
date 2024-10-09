import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="section_wrapper contact">
        <div className="section_header">
          <h3 className="section_header_subtitle">Get in touch</h3>
          <h1 className="section_header_title">Contact Us</h1>
        </div>

        <main className="contact_main">
          <div className="contact_top">
            <div className="contact_card_city">New Delhi</div>

            <div className="contact_cards">
              <div className="contact_card_item">
                <div className="contact_card_office">Head Office</div>
                <div className="contact_card_address">
                  <i class="fa-solid fa-location-dot" />
                  <span>
                    24 Jangpura ‘A’, First Floor, Mathura Road, New Delhi –
                    110014.
                  </span>
                </div>
                <div className="contact_card_phone">
                  <i class="fa-solid fa-phone" />
                  <span>+91 9910597272</span>
                </div>
                <div className="contact_card_email">
                  <i class="fa-solid fa-envelope" />
                  <span>office@24chambers.in</span>
                </div>
              </div>

              <span className="card_divider">|</span>

              <div className="contact_card_item">
                <div className="contact_card_office">Chamber</div>
                <div className="contact_card_address">
                  <i class="fa-solid fa-location-dot" />
                  <span>
                    217, Block ‘S’, High Court of Delhi, Sher Shar Road, New
                    Delhi – 110003.
                  </span>
                </div>
                <div className="contact_card_phone">
                  <i class="fa-solid fa-phone" />
                  <span>+91 11-21410192</span>
                </div>
                <div className="contact_card_email">
                  <i class="fa-solid fa-envelope" />
                  <span>office@24chambers.in</span>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="contact_bottom">
            <div className="contact_card_city">Rajasthan</div>

            <div className="contact_cards">
              <div className="contact_card_item">
                <div className="contact_card_office">Jaipur</div>
                <div className="contact_card_address">
                  <i class="fa-solid fa-location-dot" />
                  <span>
                    House no -322 Ganesh Nagar Vistar Near Kardhani Kalwar Road,
                    Jhotwara Jaipur -302012
                  </span>
                </div>
                <div className="contact_card_phone">
                  <i class="fa-solid fa-phone" />
                  <span>+91 9910597272</span>
                </div>
                <div className="contact_card_email">
                  <i class="fa-solid fa-envelope" />
                  <span>office@24chambers.in</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Contact;
