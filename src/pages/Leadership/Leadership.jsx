// import CSS
import "./leadership.css";

// import Images
import image1 from "/Images/assets/about/Picture1.jpg";
import image2 from "/Images/assets/about/Picture2.jpg";
import image3 from "/Images/assets/about/Picture3.png";

// import components
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import LinkButton from "../../components/LinkButton/LinkButton";

const Leadership = () => {
  return (
    <div className="leadership">
      <div className="leadership_wrapper">
        <main>
          <SectionHeader title="THE FIRM & ITS LEADERSHIP" />
          <div className="leadership_top">
            <p>
              The present law firm “24 Chambers” originates with the foundation
              laid by Late Shri S.C. Nigam, Advocate, who set up and established
              his chamber at 24, Jangpura 'A', Mathura Road New Delhi in 1975.{" "}
            </p>
            <p>
              Shri S.C. Nigam attained the degree of Bachelor of Arts (Commerce
              Group). and LL.B. Thereafter, he enrolled as an Advocate with the
              Bar Council of Delhi in the year 1958. He joined the chambers of
              Late Shri Shiv Narain Shankar who was later elevated as a Judge,
              Delhi High Court. He was also associated with other eminent
              jurists like Late Shri Sardar Bahadur.{" "}
            </p>
            <p>
              Shri S.C. Nigam was a renowned expert in Civil Laws with a
              specialised practice in Property Law and Electricity Laws. He was
              the Standing Counsel and Legal Advisor for New Delhi Municipal
              Committee (now, New Delhi Municipal Council).{" "}
            </p>
            <img src={image1} alt="Leadership image" />
            <p>
              Mr Nigam built a reputation and practice rooted in integrity,
              expertise and steadfast commitment to clients. From its humble
              beginnings to its current evolution, 24 Chambers stands as a
              testament to the enduring legacy of Late Shri S.C. Nigam,
              Advocate.
            </p>
          </div>

          <div className="leadership_middle">
            <img src={image2} alt="Leadership image" />
            <p>
              Over the years, the chamber evolved and adapted to the changing
              legal landscape while remaining rooted in the principles upon
              which it was founded. Now a Partnership Firm, 24 Chambers
              continues to build upon the strong foundations laid over five
              decades ago. The firm is dedicated to providing personalized
              attention, and solutions by representing clients in a rapidly
              evolving legal environment.
            </p>
            <p>
              As we look to the future, we remain steadfast in our commitment to
              upholding excellence and service that have defined 24 Chambers
              since its inception.
            </p>
          </div>
          <div className="leadership_bottom">
            <h3>Mr. Atul Nigam</h3>

            <img src={image3} alt="Leadership image" />
            <p>
              Mr. Atul Nigam is a distinguished advocate renowned for his
              expertise in civil, commercial, insurance and administrative law.
              With his extensive knowledge, precision and ability to navigate
              complex legal landscapes, he is a preeminent figure at 24
              Chambers. As a leader and founding member of 24 Chambers, he has
              been instrumental in giving the firm direction and steadfast
              commitment.
            </p>
            <p>
              In his capacity as an independent practitioner, Mr Nigam regularly
              appears before the Hon’ble Supreme Court of India, the Hon’ble
              High Court of Delhi, and the National Consumer Disputes Redressal
              Commission (NCDRC). His expertise spans commercial law,
              arbitration, real estate, construction and insurance law. An
              alumnus of Queen Mary University of London (QMUL) and having been
              appointed as an arbitrator in several matters, he has vast
              experience in commercial arbitration. Additionally, he is
              empanelled as an Arbitrator with the Mumbai Centre for
              International Arbitration (MCIA) and PHDCCI.
            </p>
            <p>
              Complementing his legal practice, Mr Nigam regularly delivers
              guest lectures at several esteemed Universities, sharing his
              experience and knowledge in shaping the upcoming legal
              professionals.
            </p>

            <div className="memberships">
              <h3>Memberships:</h3>
              <ol>
                <li>PHD Chambers of Commerce and Industry </li>
                <li>Indo-American Chambers of Commerce</li>
              </ol>
            </div>

            <div className="awards">
              <h3>Awards and Recognition:</h3>
              Outstanding Contribution towards Parent Bar, Delhi Bar Association
            </div>

            <LinkButton
              link="https://www.linkedin.com/in/atul-nigam-76b596171/?originalSubdomain=in"
              text="LinkedIn Profile"
              color="dark"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Leadership;
