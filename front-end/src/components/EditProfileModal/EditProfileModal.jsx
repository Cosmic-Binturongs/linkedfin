import React, { useState, useEffect } from "react";
import CSRFToken from "../CSRFToken";
import Cookies from "js-cookie";

export default function EditProfileModal({setProfileModal, user, setUser, setToggle}) {
  const [formData, setFormData] = useState({
    bio: user?.profile.bio,
    github: user?.profile.github,
    image: user?.profile.image,
    user_id: user.profile.user_id
  });

  useEffect(() => {
    setFormData({
      bio: user.profile.bio,
      github: user.profile.github,
      image: user.profile.image,
      user_id: user.profile.user_id
    }) 
    
  }, [user])

  const { bio, github, image } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let options = {
      method: 'PUT',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken")
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    }

    console.log(formData)
    console.log(options)

    fetch('http://localhost:8000/profile/update', options).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
      setUser(data)
      setToggle(prev => !prev)
      setProfileModal(false)
    })
  };

  return (
    <div className="modal-main">
      <div className="add-proj-modal-back">
        <div className="modal-container">
          <form className="add-proj-form" onSubmit={handleSubmit}>
            <CSRFToken />
            <input
              placeholder="Bio"
              name="bio"
              value={bio}
              onChange={handleChange}
            />
            <input
              placeholder="GitHub Link"
              name="github"
              value={github}
              onChange={handleChange}
            />
            <input
              placeholder="Image"
              name="image"
              value={image}
              onChange={handleChange}
            />
            <button type="submit" className="proj-form-btn">
              Update Profile
            </button>
          </form>

          <div className="close-container">
            <button onClick={() => setProfileModal(false)} className="close-btn">
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
