import React from 'react'
import './project-comp.css'



export default function ProjectComp() {
  const project = [
    {
      bio: "I am a software engineer working for evilcorp",
      github: "https://www.linkedin.com/",
      img: "https://i.ibb.co/yqcpF2y/Screen-Shot-2022-05-08-at-10-04-43-AM.png",
    },
    {
      bio: "I am a software engineer working for evilcorp",
      github: "https://www.linkedin.com/",
      img: "https://i.ibb.co/yqcpF2y/Screen-Shot-2022-05-08-at-10-04-43-AM.png",
    },
    {
      bio: "I am a software engineer working for evilcorp",
      github: "https://www.linkedin.com/",
      img: "https://i.ibb.co/yqcpF2y/Screen-Shot-2022-05-08-at-10-04-43-AM.png",
    },
    {
      bio: "I am a software engineer working for evilcorp",
      github: "https://www.linkedin.com/",
      img: "https://i.ibb.co/yqcpF2y/Screen-Shot-2022-05-08-at-10-04-43-AM.png",
    }
  ]



  return (

    <div className='project-component'>
      {project.map(card =>(
        <div className="project-card">
          <div className="project-card-content">
            <div>
              <img className="project-card-image"src={card.img}/>
            </div>
            <div className="project-card-bio">
              <div>
                {card.bio}
              </div>
              <div className="project-card-links">
                {card.github}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}
