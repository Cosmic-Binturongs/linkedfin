import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'

function Navbar() {
  let navigate = useNavigate({})
  const logoImg = 'https://i.ibb.co/R06qfbY/Screen-Shot-2022-05-05-at-9-18-46-AM.png'

  //Button display configs/logic
  const [btnSignout, setBtnSignout] = useState(false)
  const [btnSignin, setBtnSignin] = useState(true)
  const [btnSignup, setBtnSignup] = useState(false)
  const [btnProjects, setBtnProjects] = useState(false)
  const [btnProfile, setBtnProfile] = useState(false)
  const [btnFeed, setBtnFeed] = useState(false)
  function HandleButton(e) {
    console.log(e)
    console.log(e.target.innerText)
    //SIGN IN BTN => PROFILE PAGE
    if (e.target.innerText == 'Sign In') {
      navigate('/profile', { replace: true })
      setBtnSignin(false)
      setBtnSignout(true)
      setBtnFeed(false)
      setBtnProfile(false)
      setBtnProjects(true)
    } else if (e.target.innerText == 'Sign Up') {
      navigate('/profile', { replace: true })
      setBtnSignin(false)
      setBtnSignout(false)
      setBtnFeed(false)
      setBtnProfile(false)
      setBtnProjects(false)
      setBtnSignup(false)
      //SIGN OUT BTN => LANDING PAGE
    } else if (e.target.innerText == 'Sign Out') {
      navigate('/', { replace: true })
      setBtnSignin(true)
      setBtnSignout(false)
      setBtnFeed(false)
      setBtnProfile(false)
      setBtnProjects(false)
      setBtnSignup(true)
      //PROFILE BTN => PROFILE PAGE
    } else if (e.target.innerText == 'Profile') {
      navigate('/profile', { replace: true })
      setBtnSignin(false)
      setBtnSignout(true)
      setBtnFeed(false)
      setBtnProfile(false)
      setBtnProjects(true)
      setBtnSignup(false)
      //FEED BTN => FEED PAGE
    } else if (e.target.innerText == 'Feed') {
      navigate('/feed', { replace: true })
      setBtnSignin(false)
      setBtnSignout(true)
      setBtnFeed(false)
      setBtnProfile(true)
      setBtnProjects(false)
      setBtnSignup(false)
    } else if (e.target.innerText == 'Projects') {
      navigate('/feed', { replace: true })
      setBtnSignin(false)
      setBtnSignout(true)
      setBtnFeed(false)
      setBtnProfile(true)
      setBtnProjects(false)
      setBtnSignup(false)
    }
  }

  return (
    <div className="nav-container">
      <div className='nav-logo'>
        <img className='nav-logo-img' src={logoImg} />
        <h1 className="nav-logo-text">LinkedFin</h1>
      </div>
      <div className="nav-button-container">
        {btnFeed && <button onClick={(e) => HandleButton(e)}>Feed</button>}
        {btnSignout && <button onClick={(e) => HandleButton(e)}>Sign Out</button>}
        {btnSignin && <button onClick={(e) => HandleButton(e)}>Sign In</button>}
        {btnProfile && <button onClick={(e) => HandleButton(e)}>Profile</button>}
        {btnProjects && <button onClick={(e) => HandleButton(e)}>Projects</button>}
        {btnProjects && <button onClick={(e) => HandleButton(e)}>My Profile</button>}
        {btnSignup && <button onClick={(e) => HandleButton(e)}>Signup</button>}
      </div>
    </div>
  );
}

export default Navbar;
