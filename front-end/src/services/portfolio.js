/* CRUD FUNCTIONALITY*/
import axios from "axios";
import api from "./apiConfig";

//get all portfoilio

export const getAllPortfolio = async () => {
  const res = await api.get("/endpoint");
  return res.data;
};

//get single portfolio

export const getSinglePortfolio = async id => {
  try {
    const res = await api.get(`/endpoint/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

//put request. Update portfolio

export const updatePortfolio = async (id, body) => {
  try {
    const data = {
      bio: body.bio,
      github: body_github,
      image: body_image,
    };
    const updateData = await api.put(`/endpoint/${id}`, data);
    return updateData.data;
  } catch (err) {
    console.log(err);
  }
};

//post requestion. Post new portfolio
export const createPortfolio = async body => {
  try {
    const data = {
      bio: body.bio,
      github: body.github,
      iamge: body.image,
    };
    const newPortfolio = await api.post("/endpoint", data);
    return newPortfolio.data;
  } catch {}
};

//delete request
export const deletePortfolio = async id => {
  try {
    const res = await axios.delete(`/endpoint/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
