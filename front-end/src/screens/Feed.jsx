import { useState, useEffect } from "react";
// import Sidebar from '../components/sidebar/Sidebar.jsx'
import "./feed-style.css";
import { motion } from "framer-motion";
import Ads from "../components/ads";
export default function Feed({ projects }) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/profile/all")
      .then(res => res.json())
      .then(data => {
        setProfiles(data);
      });
  }, []);

  return (
    <div className="feed-container">
      <h1 className="feed-title"> LINKFIN PROJECT</h1>
      <div className="projects-container">
        {projects &&
          projects.map(project => (
            <motion.div
              key={project.id}
              className="project-container"
              whileHover={{ x: -30, y: -20, boxShadow: "10px 5px 50px black" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* <div className="project-component"> */}
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
              <div className="owner-picture">
                {profiles
                  .filter(profile => {
                    return profile.id === project.profile_id;
                  })
                  .map((userProfile, index) => (
                    <img
                      key={index}
                      src={userProfile.image}
                      height="100px"
                      width="100px"
                      className="projectprofile-img"
                    />
                  ))}
              </div>
              {/* </div> */}
            </motion.div>
          ))}
      </div>
      <Ads className="img-container" />
      {/* <Sidebar /> */}
    </div>
  );
}
