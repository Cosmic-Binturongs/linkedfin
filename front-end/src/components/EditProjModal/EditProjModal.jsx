import { useState, useEffect } from "react";
import CSRFToken from "../CSRFToken";
import Cookies from "js-cookie";
// import "./AddProjModal.css";

export default function Modal({ setProjectEditModal, profile_id, project, user, setToggle }) {

  const [newProject, setNewProject] = useState({
    title: project?.title,
    github_link: project?.github_link,
    description: project?.description,
    profile_id
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProject({
      ...newProject,
      [name]: value,
    });
  };

  useEffect(() => {
    setNewProject({
      title: project.title,
      github_link: project.github_link,
      description: project.description,
      profile_id
    }) 
    
  }, [user])

  const handleSubmit = (event) => {
    event.preventDefault();
    let options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      credentials: "include",
      body: JSON.stringify(newProject)
    };
      
    
    fetch(`http://localhost:8000/projects/${project.id}/`, options)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        // setUserProjects(prev => ([
        //   ...prev,
        //   data
        // ]));
        setToggle(prev => !prev)
        setProjectEditModal(false);
      });
  };

  return (
    <div className="modal-main">
      <div className="add-proj-modal-back">
        <div className="modal-container">
          <form className="add-proj-form" onSubmit={handleSubmit}>
            <CSRFToken />
            <input
              placeholder="Title"
              name="title"
              value={newProject.title}
              onChange={handleChange}
            />
            <input
              placeholder="GitHublink"
              name="github_link"
              value={newProject.github_link}
              onChange={handleChange}
            />
            <input
              placeholder="Description"
              name="description"
              value={newProject.description}
              onChange={handleChange}
            />

            <button type="submit" className="proj-form-btn">
              Edit Project
            </button>
          </form>

          <div className="close-container">
            <button onClick={() => setProjectEditModal(false)} className="close-btn">
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
