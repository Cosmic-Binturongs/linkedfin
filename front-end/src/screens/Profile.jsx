import React from "react";
import { useState, useEffect } from "react";
import ProfileComp from "../components/ProfileComp/ProfileComp";
import AddProjModal from "../components/AddProjModal/AddProjModal";
import "./Profile.css";
import ProjectComp from "../components/ProjectComp/ProjectComp";


function Profile({ user, projects, setToggle}) {
  const [showModal, setShowModal] = useState(false)
  const [userProjects, setUserProjects] = useState([]);

  const [profile, setProfile] = useState({
    bio: "",
    github: "",
    image: "",
  })

  useEffect(() => {
    if (user) {
      setProfile({
        bio: user.profile.bio,
        github: user.profile.github,
        image: user.profile.image,
      })
    }
  }, [user])

  useEffect(() => {
    let userProjectsData = projects && user && projects.filter((project) => {
      return project.profile_id === user.profile.id
    }) 
    setUserProjects(userProjectsData)
  }, [projects])

  return (
    <div className='profile-screen-container'>

      <ProfileComp profile={profile} />
      <button id='add-proj-btn' onClick={() => setShowModal(true)}>Add Project</button>
      {showModal ? <AddProjModal setShowModal={setShowModal} profile_id={user.profile.id} setUserProjects={setUserProjects}/> : null}
      <ProjectComp setToggle={setToggle} projects={userProjects} user={user}/>


    </div>
  );
}

export default Profile;
