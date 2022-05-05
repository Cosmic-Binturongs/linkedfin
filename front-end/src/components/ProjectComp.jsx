import React from 'react'



export default function ProjectComp({project}) {




  return (
    
      <div className='project-component'>
        <h3 className='project-component-name'>{project.title}</h3>
        <a className='project-component-github' href={`${project.github_link}`}>GitHub</a>
        <h5 className='project-component-publish-date'>{project.publish_date} </h5>
        <p className='project-component-description'>{project.description}</p>
      </div>
  
  )
}
