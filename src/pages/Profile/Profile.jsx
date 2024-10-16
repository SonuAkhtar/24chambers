import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import CSS
import "./profile.css";

import image3 from "/Images/assets/about/Picture3.png";

//import appData
import { profileData } from "../../../appData";

const Profile = () => {
  const [currentProfile, setCurrentProfile] = useState({});
  const { name } = useParams();

  useEffect(() => {
    setCurrentProfile(
      name === "atul-nigam"
        ? profileData[0]
        : name === "tanvi-nigam"
        ? profileData[1]
        : profileData[2]
    );
  }, []);

  console.log(currentProfile);

  return (
    <div className="profile">
      <main>
        <div className="profile_top">
          <div className="profile_info">
            <div className="profile_name">{currentProfile?.name}</div>
            <div className="profile_title">{currentProfile?.title}</div>
            <div className="profile_phone">{currentProfile?.phone}</div>
            <div className="profile_email">{currentProfile?.email}</div>
            <a href={currentProfile?.linkedin} className="profile_linkedin">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <div className="profile_expertise">
              <span>Practice Areas: </span>
              {currentProfile?.practice}
            </div>
            <div className="profile_special">
              <span>Specialization: </span>
              {currentProfile?.specialization}
            </div>
          </div>
          <div className="profile_image">
            <img src={currentProfile?.image} alt="profile image" />
          </div>
        </div>

        <div className="profile_bottom">
          <div className="profile_details">
            {currentProfile?.details?.map((detail) => (
              <p key={detail.id}>{detail.text}</p>
            ))}
          </div>

          <div className="profile_memebership">
            <h3>Membership:</h3>
            <ol>
              {currentProfile?.membership?.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ol>
          </div>

          <div className="profile_award">
            <h3>Awards and Recognition: </h3>
            {currentProfile?.awards}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
