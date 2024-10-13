import { useState } from "react";

// import CSS
import "./team.css";

// import Images
import image4 from "/Images/assets/about/Picture4.png";
import image5 from "/Images/assets/about/Picture5.png";
import image6 from "/Images/assets/about/Picture6.png";
import image7 from "/Images/assets/about/Picture7.png";
import image8 from "/Images/assets/about/Picture8.png";

// import components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import LinkButton from "../../components/LinkButton/LinkButton";

const Team = () => {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <div className="team">
      <Header />
      <div className="team_wrapper">
        <main>
          <SectionHeader title="THE TEAM" />

          <section className="team_section">
            <div className="team_cards">
              <div
                className={`team_card_item ${
                  currentCard === 0 ? "active" : ""
                }`}
                onClick={() => setCurrentCard(0)}
              >
                <div className="team_img">
                  <img src={image4} alt="team image" />
                </div>

                <div className="team_card_info">
                  <div className="team_name">Ms Tanvi Nigam</div>
                  <div className="team_expertise">
                    <span>Expertise: </span>
                    Civil, Commercial, Arbitration, Insurance and Trade Law
                  </div>
                </div>
              </div>

              <div
                className={`team_card_item ${
                  currentCard === 1 ? "active" : ""
                }`}
                onClick={() => setCurrentCard(1)}
              >
                <div className="team_img">
                  <img src={image5} alt="team image" />
                </div>

                <div className="team_card_info">
                  <div className="team_name">Mr Animesh Upadhyay</div>
                  <div className="team_expertise">
                    <span>Expertise: </span>
                    Criminal Law
                  </div>
                </div>
              </div>
            </div>

            {currentCard === 0 ? (
              // Tanvi Nigam
              <div className="team_card_details">
                <div className="name_partner">
                  <h3>Tanvi Nigam</h3>
                  <p>Partner, 24 Chambers</p>
                </div>

                <p>
                  Tanvi has represented both private clients and public sector
                  undertakings before the courts across Delhi and the Supreme
                  Court of India. Her experience encompasses a broad range of
                  legal areas, including civil law, commercial law, consumer
                  law, arbitration, insurance law, administrative law, and
                  constitutional law. She has also been a part of several
                  constitutional bench matters before the Hon’ble Supreme Court
                  of India.
                </p>

                <p>
                  With an LL.M in Litigation and Dispute Resolution from
                  University College London (UCL), Tanvi specialises in the
                  field of International Commercial Litigation, International
                  and Investment Arbitration and International Trade Law. Her
                  experience as a Legal Researcher with a Judge, in the High
                  Court of Delhi and as an intern with several sitting judges of
                  the Hon’ble Supreme Court of India and High Court of Delhi,
                  has shaped her solution-oriented approach.
                </p>

                <p>
                  In addition to her litigation practice, Tanvi is interested in
                  legal research and writing. She has authored articles on a
                  range of topics focusing on international commercial law,
                  trade law and arbitration
                </p>

                <div className="membership">
                  <h3>Membership: </h3>
                  <ol>
                    <li>
                      Chartered Institute of Arbitrators (CIArb), Associate
                      Member.
                    </li>
                    <li>Indo-American Chamber of Commerce, Member.</li>
                    <li>Arbitration Bar of India, Member</li>
                    <li>
                      London Court of International Arbitration (LCIA), Member
                    </li>
                    <li>Young ICCA, Member</li>
                    <li>
                      Mumbai Centre for International Arbitration, Young Member
                    </li>
                  </ol>
                </div>

                <LinkButton
                  link="www.linkedin.com/in/tanvi-nigam-a07753151"
                  text="LinkedIn Profile"
                  color="dark"
                />
              </div>
            ) : (
              // Animesh Upadhyay
              <div className="team_card_details">
                <div className="name_partner">
                  <h3>Animesh Upadhyay</h3>
                  <p>Partner, 24 Chambers</p>
                </div>

                <p>
                  Animesh is a practitioner with vast experience in complex
                  cases involving criminal law, consumer law, insolvency and
                  service law. He brings a wealth of knowledge to his practice
                  before various tribunals, courts across Delhi and the Hon'ble
                  Supreme Court of India.
                </p>

                <p>
                  A law graduate from National Law University Lucknow, Animesh
                  has an in-depth understanding of the intricacies of Indian
                  law. His expertise extends to white-collar crimes, insolvency
                  proceedings, and service-related disputes.
                </p>

                <p>
                  Additionally, Animesh has authored numerous articles on topics
                  ranging from criminal justice to insolvency law and
                  arbitration, offering insightful analysis and
                  thought-provoking commentary on the most pressing legal
                  issues. Animesh brings expertise, dedication, and passion that
                  sets him apart in the legal community.
                </p>
                <LinkButton
                  link="https://www.linkedin.com/in/animesh-upadhyay-a3685514b/"
                  text="LinkedIn Profile"
                  color="dark"
                />
              </div>
            )}
          </section>

          <section className="counsel_section"></section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
