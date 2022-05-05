import "./App.css";
import Landing from "./screens/landing.jsx";
import Profile from "./screens/Profile.jsx";
import Signin from "./screens/SignIn.jsx";
import Feed from "./screens/Feed.jsx";

import styled from "styled-components";
import Navbar from './components/navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
