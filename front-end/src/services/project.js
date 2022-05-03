/* CRUD FUNCTIONALITY*/
import axios from "axios";``
import api from "./apiConfig";

//GET


export const getAllProject = async()=>{ 
try{ 
const data = api.get("/endpoint")
}
catch(err){
    (error=> console.log(error))
    }
}

//get single project

export const getSingleProject = async(id) => { 
    try{ 
        const data = api.get(`endpoint/:${id}`)
        return data
    }
    catch(err){ 
        console.log(err)
    }
}

//POST
export const postProject = function (post) {
try {
  const projectPost = {
    team: post.name,
    title: post.title,
    body: post.description,
    github: post.github_link,
  };
  const data = await api.post("/endpoint", projectPost);
  console.log(projectPost.team); //this is for testing
  return data
}
catch(error){ 
    console.log(error)
    }   
}

//PUT
export const updateProject = async(id, body) => {
try{ 
    const updateData = await api.put(`/endpoint${id}`, body)
    return updateData.data
} 
catch(err){ 
    console.log(err)
}
}
//DELETE
export const deleteProject= async(id )=>{ 
try {
    const deleteData = await axios.delete(`/endpoint/${id}`)
    return deleteData
    }
catch(err){ 
    console.log(err)
}
}