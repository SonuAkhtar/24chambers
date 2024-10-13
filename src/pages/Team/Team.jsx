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

const Team = () => {
  return (
    <div className="aboutUs">
      <Header />
      <div className="aboutUs_wrapper">
        <main className="aboutUs_main">
          <h1 className="aboutUs_title">THE TEAM</h1>
          <section className="team">
            <h2 className="team_title">The Team</h2>

            <div className="team_detail">
              <div className="team_left">
                <div className="team_left_img">
                  <img src={image4} alt="about us image" />
                </div>

                <div className="team_left_info">
                  <div className="team_left_name">Ms Tanvi Nigam</div>
                  <div className="team_left_expertise">
                    <span>Expertise:</span>
                    Civil, Commercial, Arbitration, Insurance and Trade Law
                  </div>
                </div>
              </div>

              <div className="team_right">
                <div className="team_right_name">Tanvi Nigam</div>
                <div className="team_right_partner">Partner, 24 chambers</div>
                <div className="team_right_info">
                  Tanvi has represented both private clients and public sector
                  undertakings before the courts across Delhi and the Supreme
                  Court of India. Her experience encompasses a broad range of
                  legal areas, including civil law, commercial law, consumer
                  law, arbitration, insurance law, administrative law, and
                  constitutional law. She has also been a part of several
                  constitutional bench matters before the Hon’ble Supreme Court
                  of India. With an LL.M in Litigation and Dispute Resolution
                  from University College London (UCL), Tanvi specialises in the
                  field of International Commercial Litigation, International
                  and Investment Arbitration and International Trade Law. Her
                  experience as a Legal Researcher with a Judge, in the High
                  Court of Delhi and as an intern with several sitting judges of
                  the Hon’ble Supreme Court of India and High Court of Delhi,
                  has shaped her solution-oriented approach. In addition to her
                  litigation practice, Tanvi is interested in legal research and
                  writing. She has authored articles on a range of topics
                  focusing on international commercial law, trade law and
                  arbitration.
                </div>

                <div className="team_right_membership">
                  <ol type="">
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
              </div>
            </div>

            <hr />

            <div className="team_detail">
              <div className="team_left">
                <div className="team_left_img">
                  <img src={image5} alt="about us image" />
                </div>

                <div className="team_left_info">
                  <div className="team_left_name">Mr Animesh Upadhyay</div>
                  <div className="team_left_expertise">
                    <span>Expertise:</span>
                    Criminal Law
                  </div>
                </div>
              </div>

              <div className="team_right">
                <div className="team_right_name">Mr Animesh Upadhyay</div>
                <div className="team_right_partner">Partner, 24 chambers</div>
                <div className="team_right_info">
                  Animesh is a practitioner with vast experience in complex
                  cases involving criminal law, consumer law, insolvency and
                  service law. He brings a wealth of knowledge to his practice
                  before various tribunals, courts across Delhi and the Hon'ble
                  Supreme Court of India. A law graduate from National Law
                  University Lucknow, Animesh has an in-depth understanding of
                  the intricacies of Indian law. His expertise extends to
                  white-collar crimes, insolvency proceedings, and
                  service-related disputes. Additionally, Animesh has authored
                  numerous articles on topics ranging from criminal justice to
                  insolvency law and arbitration, offering insightful analysis
                  and thought-provoking commentary on the most pressing legal
                  issues. Animesh brings expertise, dedication, and passion that
                  sets him apart in the legal community.
                </div>
              </div>
            </div>
          </section>

          <section className="counsels">
            <h2 className="counsels_title">Of-Counsels</h2>

            <div className="counsels_cards">
              <div className="card_item">
                <div className="counsel_img">
                  <img src={image6} alt="about us image" />
                </div>

                <div className="counsel_card_info">
                  <div className="counsel_name">Ms Monica Bhardwaj</div>
                  <div className="counsel_expertise">
                    <span>Expertise: </span>
                    Civil Laws, Employment Laws and Banking Laws
                  </div>
                </div>
              </div>

              <div className="card_item">
                <div className="counsel_img">
                  <img src={image7} alt="about us image" />
                </div>

                <div className="counsel_card_info">
                  <div className="counsel_name">Mr Ashwin Romy</div>
                  <div className="counsel_expertise">
                    <span>Expertise: </span>
                    Civil Law and Service Law
                  </div>
                </div>
              </div>

              <div className="card_item">
                <div className="counsel_img">
                  <img src={image8} alt="about us image" />
                </div>

                <div className="counsel_card_info">
                  <div className="counsel_name">Mr Kaustubh Shakkarwar</div>
                  <div className="counsel_expertise">
                    <span>Expertise: </span>
                    IP, TMT, Data Protection and Taxation.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
