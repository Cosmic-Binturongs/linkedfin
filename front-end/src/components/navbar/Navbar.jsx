import "./App.css";
import { Fragment } from "react";
import img from "../../images/Logo.png";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Cookies from "js-cookie";

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
      <li className="nav-item">
        <NavLink id="profile" className="nav-link" to="/feed">
          Feed
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink id="profile"className="nav-link" to="/profile">
          Profile
        </NavLink>
      </li>
      <li className="nav-item">
        <button id="logout" className="nav-link" onClick={handleClick}>
          Logout
        </button>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <NavLink id="profile" className="nav-link" to="/feed">
          Feed
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink id="login" className="nav-link" to="/signin">
          Login
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link to="/">
          <img className="nav-logo-img" src={img} />
        </Link>
        <h1 className="nav-logo-text">LinkedIn</h1>
      </div>
      <div className="nav-buttons">
        <ul className="login-button">{isAuthenticated ? authLinks : guestLinks}</ul>
      </div>
    </div>
  );
}
