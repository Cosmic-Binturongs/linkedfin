import './App.css'
import { useState } from 'react'
import img from "../../images/Logo.png";
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
  const navigate = useNavigate()
  //BUTTONS USESTATE
  const [btnSignin, setbtnSignin] = useState(true)
  const [btnSignout, setbtnSignout] = useState(true)
  const [btnMyProfile, setbtnMyProfile] = useState(true)
  const [btnProjects, setbtnProjects] = useState(true)
  const [btnSignup, setbtnSignup] = useState(true)

  function handleClick(e) {
    console.log(e.target.innerText)
    const click = e.target.innerText
    if (click == "Sign In") {
      navigate('/profile')
      setbtnSignin(false)
      setbtnSignout(true)
      setbtnMyProfile(true)
      setbtnProjects(true)
      setbtnSignup(false)
    } else if (click == "Sign Out") {
      navigate('/')
      setbtnSignin(true)
      setbtnSignout(false)
      setbtnMyProfile(false)
      setbtnProjects(false)
      setbtnSignup(true)
    } else if (click == "My Profile") {
      navigate('/profile')
      setbtnSignin(false)
      setbtnSignout(true)
      setbtnMyProfile(true)
      setbtnProjects(true)
      setbtnSignup(false)
    } else if (click == "Projects") {
      navigate('/feed')
      setbtnSignin(false)
      setbtnSignout(true)
      setbtnMyProfile(true)
      setbtnProjects(true)
      setbtnSignup(false)
    } else if (click == "Sign Up") {
      navigate('/')
      setbtnSignin(true)
      setbtnSignout(false)
      setbtnMyProfile(false)
      setbtnProjects(false)
      setbtnSignup(false)
    }
  }

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img className=".nav-logo-img" src={img} />
        <h1 className="nav-logo-text">LinkedIn</h1>
      </div>
      <div className="nav-buttons">
        {btnSignin && <button onClick={(e) => handleClick(e)}>Sign In</button>}
        {btnSignout && <button onClick={(e) => handleClick(e)}>Sign Out</button>}
        {btnMyProfile && <button onClick={(e) => handleClick(e)}>My Profile</button>}
        {btnProjects && <button onClick={(e) => handleClick(e)}>Projects</button>}
        {btnSignup && <button onClick={(e) => handleClick(e)}>Sign Up</button>}
      </div>
    </div>
  )
}
