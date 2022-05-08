import './sidebar-style.css'

export default function Sidebar() {
  const person = [{
    img: "https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg",
    name: "Tom",
  },
    {
      img: "https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg",
      name: "Tom",
    },
    {
      img: "https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg",
      name: "Tom",
    },
    {
      img: "https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg",
      name: "Tom",
    },
  ]


  return (
    <div className="sidebar-container">
      {person.map(
        card => (
          <div className="sidebar-card">
            <img className="sidebar-card-image" src={card.img}/>
            <div className="sidebar-card-name-container">
              {card.name}
            </div>
          </div>
        )
      )}
    </div>
  )
}
