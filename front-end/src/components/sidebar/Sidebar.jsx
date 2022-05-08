import { useState, useEffect } from 'react';
import './sidebar-style.css'

export default function Sidebar() {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/profile/all")
      .then(res => res.json())
      .then((data) => {
        setProfiles(data)
      })
    
  }, [])

  return (
    <div className="sidebar-container">
      {profiles.map(
        profile => (
          <div className="sidebar-card">
            <img className="sidebar-card-image" src={profile.image}/>
            <div className="sidebar-card-name-container">
              {profile.name}
            </div>
          </div>
        )
      )}
    </div>
  )
}