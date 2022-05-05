import React from 'react'
import { Link } from 'react-router-dom';


export default function ProfileComp({profile}) {


  return (
    <div className='profile-component'>
     <Link to={`/profile/${profile._id}`}>  
      <h3 className='profile-component-name'>{profile.name}</h3>
     </Link>
     <img className='profile-component-image' src={profile.image} />
     <p className='profile-component-bio'>{profile.bio}</p>
     <a className='profile-component-github' href={`${profile.github}`}>GitHub</a>
      
     {/* will try once user is added */}
     {/* <a className='profile-component-mailTo' href={`mailto:${profile.user.mail}`}>E-Mail</a> */}
        
    </div>
 
  )
}