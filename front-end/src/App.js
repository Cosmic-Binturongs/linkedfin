import "./App.css";
import Landing from "./screens/landing.jsx";
import Profile from "./screens/Profile.jsx";
import SignIn from "./screens/SignIn.jsx";
import Feed from "./screens/Feed.jsx";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./HOC/Layout.jsx";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app">
      {/* <Navbar /> */}
      <Layout
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        setUser={setUser}
      >
        <Routes>
          <Route
            path="/"
            element={<Landing isAuthenticated={isAuthenticated} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route
            path="/signin"
            element={
              <SignIn
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                setUser={setUser}
              />
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
