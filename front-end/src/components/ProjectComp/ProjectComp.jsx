import React from 'react'
import { useEffect, useState } from 'react'



export default function ProjectComp({project}) {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:8000/projects/")
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setItems(data);
          console.log(items)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
    )
  }, [])

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
    return (
      <div>
        {items.map(item => (
        <div className='project-component'>
         <h3 className='project-component-name'>{item.title}</h3>
         <a className='project-component-github' href={`${item.github_link}`}>GitHub</a>
         <h5 className='project-component-publish-date'>{item.publish_date} </h5>
         <p className='project-component-description'>{item.description}</p>
        </div>
        ))}
      </div>
    );
  }
// }


 


