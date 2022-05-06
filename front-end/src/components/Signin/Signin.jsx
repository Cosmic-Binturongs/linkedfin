import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import CSRFToken from "../CSRFToken"
import Cookies from "js-cookie";

function Signin({ isAuthenticated, setIsAuthenticated, setUser}) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    let options = {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken")
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    }

    let userOptions = {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: 'include',
    }

    fetch('http://localhost:8000/accounts/login', options).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
      fetch('http://localhost:8000/profile/user', userOptions).then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data)
        setIsAuthenticated(true)
        setUser(data)
      })
    })
  };
//
  if (isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className='signinContainer'>
      <h1 className='topText'>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <CSRFToken />
      <div className="signinInput">
        <input value={formData.username} onChange={handleChange} name='username' id='textfield' className="usernameField" type='text' placeholder="Username" required></input>
          <input id='textfield' className="passwordField" type='password' name="password" onChange={handleChange} value={formData.password}  placeholder="Password" required></input>
        <div>
        <button className='signinButton'>Sign in</button>
        </div>
        </div>
        </form>
    </div>
  )
}

export default Signin