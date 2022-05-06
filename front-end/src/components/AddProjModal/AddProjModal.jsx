import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectComp from "../ProjectComp/ProjectComp";
import "./AddProjModal.css";

export default function Modal({ setShowModal }) {
  // const [profileProj, setProfileProj] = useState(false)

  const [newProject, setNewProject] = useState({
    title: "",
    github_link: "",
    description: "",
  });

  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProject({
      ...newProject,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // <ProjectComp project={event} />
    console.log(newProject);
  };

  return (
    <div className="modal-main">
      <div className="add-proj-modal-back">
        <div className="modal-container">
          <form className="add-proj-form" onSubmit={handleSubmit}>
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
              Add Project
            </button>
          </form>

          <div className="close-container">
            <button onClick={() => setShowModal(false)} className="close-btn">
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
