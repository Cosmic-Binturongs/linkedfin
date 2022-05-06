import React from "react";
import { useState, useEffect } from "react";
import ProfileComp from "../components/ProfileComp/ProfileComp";
import AddProjModal from "../components/AddProjModal/AddProjModal";
import "./Profile.css";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  // using dummy data to test functionality
  const [profile, setProfile] = useState({
    bio: "I am a software engineer working for evilcorp",
    github: "https://www.linkedin.com/",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.inc.com%2Fjeff-steen%2Fgoogle-ceos-1-sentence-response-to-getting-called-out-by-employees-is-a-master-class-in-leadership.html&psig=AOvVaw25CDvsDLKrKrU97uM7IYNu&ust=1651711532549000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPi9tYvPxPcCFQAAAAAdAAAAABAE",
  });

  return (
    <div className="profile-screen-container">
      <ProfileComp profile={profile} />
      <button id="add-proj-btn" onClick={() => setShowModal(true)}>
        Add Project
      </button>
      {showModal ? <AddProjModal setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default Profile;
