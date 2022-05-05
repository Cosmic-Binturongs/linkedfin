import React from 'react'
import { Link } from 'react-router-dom';


export default function ProfileComp({profile}) {


  return (
     
   <Link to={`/profile/${profile._id}`}>
      <div className='profile-component'>
        <h3 className='profile-component-name'>{profile.name}</h3>
        <img className='profile-component-image' src={profile.image} />
        <p className='profile-component-bio'>{profile.bio}</p>
        <a className='profile-component-github' href={`${profile.github}`}>GitHub</a>
      
        {/* will try once user is added */}
        {/* <a className='profile-component-mailTo' href={`mailto:${profile.user.mail}`}>E-Mail</a> */}
        
      </div>
   </Link>
  )
}