import React from "react";
import { useEffect, useState } from "react";
import "./project-comp.css";
import Cookies from "js-cookie";

export default function ProjectComp({ projects, setToggle }) {
  const handleClick = (id) => {
    let options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      credentials: "include",
    };

    fetch(`http://localhost:8000/projects/${id}/`, options)
      .then((response) => {
        console.log(response)
        setToggle((prev) => !prev);
      })
  };

  return (
    <div>
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
              <button className="" onClick={() => handleClick(project.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
