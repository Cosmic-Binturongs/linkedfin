import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import img from "../images/Landing_image.png";
import "../style/landing.css";

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
  color: blue;
  width: 12em;
  height: 3em;
  border-radius: 15px;
  border-color: blue;
  background: linear-gradient(to right, lightblue 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
`;

function Landing() {
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
            <motion.input
              placeholder="Full Name"
              className="landing-input"
              variants={slowFade}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            ></motion.input>
            <motion.input
              placeholder=" Email"
              className="landing-input"
              variants={slowFade2}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            ></motion.input>
            <motion.input
              placeholder="Password"
              className="landing-input"
              variants={slowFade3}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            ></motion.input>
            <motion.input
              placeholder="Confirm Password"
              className="landing-input"
              variants={slowFade4}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            ></motion.input>
            <Button
              className="signup-button"
              whileHover={{ scale: 1.2 }}
              variants={slowFade5}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              Sign Up
            </Button>
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

/* needs a navbar*/
