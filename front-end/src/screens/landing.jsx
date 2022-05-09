import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import img from "../images/Landing_image.png";
import "../style/landing.css";
import CSRFToken from "../components/CSRFToken";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { register } from "../services/auth";
import Cookies from "js-cookie";
const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-item: flex-start;
`;
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-item: flex-start;
`;
const Button = styled(motion.button)`
  color: #4056a1;
  width: 12em;
  height: 3em;
  border-radius: 15px;
  border-color: blue;
  background: linear-gradient(to right, lightblue 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
`;

function Landing({ isAuthenticated }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    re_password: "",
  });

  const [accountCreated, setAccountCreated] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { password, re_password } = formData;

    if (password === re_password) {
      let options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken": Cookies.get("csrftoken"),
        },
        credentials: "include",
        body: JSON.stringify(formData),
      };

      fetch("http://localhost:8000/accounts/register", options).then(
        response => {
          setAccountCreated(true);
        }
      );
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  } else if (accountCreated) {
    return <Navigate to="/signin" replace />;
  }

  const slowFade = {
    hidden: { opacity: 0, y: -35 },
    visible: { opacity: 1, y: 0 },
  };
  const slowFade2 = {
    hidden: { opacity: 0, y: -45 },
    visible: { opacity: 1, y: 0 },
  };
  const slowFade3 = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  const slowFade4 = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  };
  const slowFade5 = {
    hidden: { opacity: 0, y: -65 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <div className="input-container">
            <form onSubmit={handleSubmit} className="landing-form">
              <CSRFToken />
              <motion.input
                placeholder="Full Name"
                className="landing-input"
                variants={slowFade}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                name="username"
                onChange={handleChange}
                value={formData.username}
                required
              ></motion.input>
              <motion.input
                placeholder=" Email"
                className="landing-input"
                variants={slowFade2}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}

                // onChange={handleChange}
                // value={formData.username}
                // required
              ></motion.input>
              <motion.input
                placeholder="Password"
                className="landing-input"
                variants={slowFade3}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                name="password"
                onChange={handleChange}
                value={formData.password}
                required
              ></motion.input>
              <motion.input
                placeholder="Confirm Password"
                className="landing-input"
                variants={slowFade4}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                name={"re_password"}
                onChange={handleChange}
                value={formData.re_password}
                required
              ></motion.input>
              <Button
                className="signup-button"
                whileHover={{ scale: 1.2 }}
                variants={slowFade5}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </ColumnLeft>
        <ColumnRight>
          <div className="title-container">
            <motion.h1
              className="title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Welcome to your{" "}
            </motion.h1>
            <motion.h1
              className="title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Portfolio Community
            </motion.h1>
          </div>
          <img
            src={img}
            alt="none"
            height={400}
            width={650}
            id="landing-image"
          />
        </ColumnRight>
        <footer className="footer">LINKFIN 2022 INC.</footer>
      </Container>
    </Section>
  );
}

export default Landing;
