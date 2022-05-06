import './sidebar-styles.css'

export default function Sidebar() {
  const person = {
    img: "https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg",
    name: "Tom",
  }



  return (
    <div className="sidebar-container">
      <div className='sidebar-card'>
        <div className="sidebar-image-container" >
          <img className="sidebar-image" src={person.img} />
        </div>
        <div className="sidebar-name-container">
          <h3>{person.name}</h3>
        </div>
      </div>
    </div>
  )
}
