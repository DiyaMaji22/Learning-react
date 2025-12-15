import React, { useState, useEffect } from 'react'
// jasonplaceholder
const HTTprequest = () => {
  const [posts,setPosts]=useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <div>
      {/* Display posts here */}
      <ul>
        {posts.map((items)=>{
          return(
            <li key={items.id}>
              Id:{items.id}<br/>
              Title:{items.title}<br/>
              Userid:{items.userId}<br/>
            </li>
          )      
        })}
      </ul>
    </div>
  )    
}

export default HTTprequest