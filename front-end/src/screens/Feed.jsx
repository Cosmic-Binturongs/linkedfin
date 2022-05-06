import ProfileComp from '../components/ProfileComp/ProfileComp.jsx
'
export default function Feed() {

  return (
    <div className='feed-container'>
      <div className='projects-container'>
        <ProfileComp />
      </div>
      <div className='sidebar-container'>
        <Sidebar />
      </div>
    </div>
  )
}
