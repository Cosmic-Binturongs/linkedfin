import { useState, useEffect } from 'react';
// import Sidebar from '../components/sidebar/Sidebar.jsx'
import './feed-style.css'

export default function Feed({ projects }) {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/profile/all")
      .then(res => res.json())
      .then((data) => {
        setProfiles(data)
      })
    
  }, [])

  return (
    <div className='feed-container'>
      <div className='projects-container'>
      {projects &&
        projects.map((project) => (
          <div key={project.id} className="project-container">
            <div className="project-component">
              <h3 className="project-component-name">{project.title}</h3>
              <a
                className="project-component-github"
                href={`${project.github_link}`}
              >
                GitHub
              </a>
              <h5 className="project-component-publish-date">
                {project.publish_date}{" "}
              </h5>
              <p className="project-component-description">
                {project.description}
              </p>
            </div>
            {profiles.filter((profile) => {
              return profile.id === project.profile_id;
            }).map((userProfile, index) => (
              <img key={index} src={userProfile.image} height="50px" width="50px"/>
            ))}
          </div>
        ))}
      </div>
      {/* <Sidebar /> */}
    </div>
  )
}