// import { useState } from "react";
// import ProjectComp from "../ProjectComp/ProjectComp";
// import CSRFToken from "../CSRFToken";
// import Cookies from "js-cookie";
// import "./AddProjModal.css";

// export default function Modal({ setShowModal, profile_id, setUserProjects }) {

//   const [newProject, setNewProject] = useState({
//     title: "",
//     github_link: "",
//     description: "",
//     profile_id
//   });


//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setNewProject({
//       ...newProject,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // <ProjectComp project={event} />
//     let options = {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "X-CSRFToken": Cookies.get("csrftoken"),
//       },
//       credentials: "include",
//       body: JSON.stringify(newProject)
//     };
      
//     // console.log(newProject)
    
//     fetch("http://localhost:8000/projects/", options)
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         console.log(data)
//         setUserProjects(prev => ([
//           ...prev,
//           data
//         ]))
//         setShowModal(prev => !prev)
//       });
//   };

//   return (
//     <div className="modal-main">
//       <div className="add-proj-modal-back">
//         <div className="modal-container">
//           <form className="add-proj-form" onSubmit={handleSubmit}>
//             <CSRFToken />
//             <input
//               placeholder="Title"
//               name="title"
//               value={newProject.title}
//               onChange={handleChange}
//             />
//             <input
//               placeholder="GitHublink"
//               name="github_link"
//               value={newProject.github_link}
//               onChange={handleChange}
//             />
//             <input
//               placeholder="Description"
//               name="description"
//               value={newProject.description}
//               onChange={handleChange}
//             />

//             <button type="submit" className="proj-form-btn">
//               Add Project
//             </button>
//           </form>

//           <div className="close-container">
//             <button onClick={() => setShowModal(false)} className="close-btn">
//               x
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
