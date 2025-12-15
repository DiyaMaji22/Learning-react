import React, { useEffect, useState } from 'react'

const Dummyjson = () => {
    const[user,setUser]=useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(res=>res.json())
        .then(data=>{
            console.log(data.users);
            setUser(data.users);
        })
    },[])
  return (                                                                                                                    
    <div>
        <ul>

           { user.map((items)=>{
                return(
                    <li key={items.id}>
                      
                      Name:{items.firstName} {items.lastName}<br/>
                      Age:{items.age}<br/>  
                      Gender:{items.gender}<br/>
                      Email:{items.email}<br/>
                      Phone:{items.phone}<br/>
                    </li>
                )

            })}
        </ul>
    </div>
  )
}

export default Dummyjson