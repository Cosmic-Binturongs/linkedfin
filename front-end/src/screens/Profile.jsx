import React from "react";
import { useState, useEffect } from "react";
import ProfileComp from "../components/ProfileComp/ProfileComp";
import AddProjModal from "../components/AddProjModal/AddProjModal";
import "./Profile.css";
import ProjectComp from "../components/ProjectComp/ProjectComp";


function Profile({user}) {
  const[project, setProject] = useState(true)

  const [showModal, setShowModal] = useState(false)
  // using dummy data to test functionality
  const [profile, setProfile] = useState({
    bio: user?.profile.bio,
    github: user?.profile.github,
    image: user?.profile.image,
  })

console.log(user)

  return (
    <div className='profile-screen-container'>

      <ProfileComp profile={profile} />
      <button id='add-proj-btn' onClick={() => setShowModal(true)}>Add Project</button>
      {showModal ? <AddProjModal setShowModal={setShowModal} /> : null}
      <ProjectComp project={project}/>


    </div>
  );
}

export default Profile;
