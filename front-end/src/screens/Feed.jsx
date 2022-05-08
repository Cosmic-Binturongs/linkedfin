import ProjectComp from '../components/ProjectComp/ProjectComp.jsx'
import Sidebar from '../components/sidebar/Sidebar.jsx'
import './feed-style.css'

export default function Feed() {


  return (
    <div className='feed-container'>
      <div className='projects-container'>
        <ProjectComp/>
      </div>
      <Sidebar />
    </div>
  )
}
