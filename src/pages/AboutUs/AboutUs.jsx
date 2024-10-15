// import CSS
import "./aboutUs.css";

// import Images
import image1 from "/Images/assets/about/Picture1.jpg";
import image2 from "/Images/assets/about/Picture2.jpg";
import image3 from "/Images/assets/about/Picture3.png";
import image4 from "/Images/assets/about/Picture4.png";
import image5 from "/Images/assets/about/Picture5.png";
import image6 from "/Images/assets/about/Picture6.png";
import image7 from "/Images/assets/about/Picture7.png";
import image8 from "/Images/assets/about/Picture8.png";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs_wrapper">
        <main className="aboutUs_main">
          <h1 className="aboutUs_title">ABOUT US</h1>
          <section className="leadership">
            <h2 className="leadership_title">Firm and Leadership</h2>

            <p className="leadership_info">
              The present law firm “24 Chambers” originates with the foundation
              laid by Late Shri S.C. Nigam, Advocate, who set up and established
              his chamber at 24, Jangpura &#39;A&#39;, Mathura Road New Delhi in
              1975. Shri S.C. Nigam attained the degree of Bachelor of Arts
              (Commerce Group). and LL.B. Thereafter, he enrolled as an Advocate
              with the Bar Council of Delhi in the year 1958. He joined the
              chambers of Late Shri Shiv Narain Shankar who was later elevated
              as a Judge, Delhi High Court. He was also associated with other
              eminent jurists like Late Shri Sardar Bahadur. Shri S.C. Nigam was
              a renowned expert in Civil Laws with a specialised practice in
              Property Law and Electricity Laws. He was the Standing Counsel and
              Legal Advisor for New Delhi Municipal Committee (now, New Delhi
              Municipal Council).
            </p>

            <div className="section_detail">
              <div className="section_image_info">
                Mr Nigam built a reputation and practice rooted in integrity,
                expertise and steadfast commitment to clients. From its humble
                beginnings to its current evolution, 24 Chambers stands as a
                testament to the enduring legacy of Late Shri S.C. Nigam,
                Advocate.
              </div>

              <img src={image1} alt="about us image" />
            </div>

            <div className="section_detail second">
              <img src={image2} alt="about us image" />

              <div className="section_image_info">
                Over the years, the chamber evolved and adapted to the changing
                legal landscape while remaining rooted in the principles upon
                which it was founded. Now a Partnership Firm, 24 Chambers
                continues to build upon the strong foundations laid over five
                decades ago. The firm is dedicated to providing personalized
                attention, and solutions by representing clients in a rapidly
                evolving legal environment. As we look to the future, we remain
                steadfast in our commitment to upholding excellence and service
                that have defined 24 Chambers since its inception.
              </div>
            </div>

            <div className="section_detail">
              <div className="section_image_info">
                Mr. Atul Nigam is a distinguished advocate renowned for his
                expertise in civil, commercial, insurance and administrative
                law. With his extensive knowledge, precision and ability to
                navigate complex legal landscapes, he is a preeminent figure at
                24 Chambers. As a leader and founding member of 24 Chambers, he
                has been instrumental in giving the firm direction and steadfast
                commitment. In his capacity as an independent practitioner, Mr
                Nigam regularly appears before the Hon’ble Supreme Court of
                India, the Hon’ble High Court of Delhi, and the National
                Consumer Disputes Redressal Commission (NCDRC). His expertise
                spans commercial law, arbitration, real estate, construction and
                insurance law. An alumnus of Queen Mary University of London
                (QMUL) and having been appointed as an arbitrator in several
                matters, he has vast experience in commercial arbitration.
                Additionally, he is empanelled as an Arbitrator with the Mumbai
                Centre for International Arbitration (MCIA) and PHDCCI.
                Complementing his legal practice, Mr Nigam regularly delivers
                guest lectures at several esteemed Universities, sharing his
                experience and knowledge in shaping the upcoming legal
                professionals. Memberships: 1. PHD Chambers of Commerce and
                Industry 2. Indo-American Chambers of Commerce Awards and
                Recognition: Outstanding Contribution towards Parent Bar, Delhi
                Bar Association
              </div>

              <img src={image3} alt="about us image" />
            </div>
          </section>

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
    </div>
  );
};

export default AboutUs;
