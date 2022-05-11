import "./App.css";
import { Fragment } from "react";
import img from "../../images/Logo.png";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { MdOutlineFeedback } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFeed } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleClick = () => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      credentials: "include",
    };

    fetch("http://localhost:8000/accounts/logout", options)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.success) {
          setIsAuthenticated(false);
          navigate("/");
        }
      });
  };

  const authLinks = (
    <Fragment>
      {/* <div className="navset"> */}
      <li className="navset">
        <AiOutlineHome />
        <div>
          <NavLink id="profile" className="" to="/">
            <button className="btns">Home</button>
          </NavLink>
        </div>
      </li>
      <li className="navset">
        <MdOutlineFeed />
        <div>
          <NavLink id="profile" className="" to="/feed">
            <button className="btns">Feed</button>
          </NavLink>
        </div>
      </li>
      {/* </div> */}
      {/* <div className="navset"> */}
      <li className="navset">
        <CgProfile />
        <div>
          <NavLink id="profile" className="" to="/profile">
            <button className="btns">Profile</button>
          </NavLink>
        </div>
      </li>
      {/* </div> */}
      <div className="navset">
        <MdOutlineFeedback />
        <li className="" id="">
          <button id="logout" className="btns" onClick={handleClick}>
            Logout
          </button>
        </li>
      </div>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="navset">
        <AiOutlineHome />
        <div>
          <NavLink id="profile" className="" to="/">
            <button className="btns">Home</button>
          </NavLink>
        </div>
      </li>
      <li className="navset">
        <MdOutlineFeed />
        <div>
          <NavLink id="profile" className="btns" to="/feed">
            <button className="btns">Feed</button>
          </NavLink>
        </div>
      </li>

      <li className="navset">
        <CgProfile />
        <div>
          <NavLink id="login" className="btns" to="/signin">
            <button className="btns">Login</button>
          </NavLink>
        </div>
      </li>
    </Fragment>
  );

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link to="/">
          <img className="nav-logo-img" src={img} height={50} width={50} />
        </Link>
        <h1 className="nav-logo-text">LinkedIn</h1>
      </div>
      <div className="nav-buttons">
        <ul className="login-button">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </div>
  );
}
