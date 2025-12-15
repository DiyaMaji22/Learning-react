import React from 'react'
import axios from 'axios'

const HTTPReqestaxios = () => {
    const [users,setUsers]=React.useState([]);
    React.useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>setUsers(res.data))
        .catch((err)=>{console.log(err)
        })
    }
  const fetchSingleData=async()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1') 
    .then((res)=>setUsers([res.data]))
    .catch((err)=>{console.log(err)
    })  
  }
  return (

    <div>
        <button onClick={fetchData}>Fetch  Data</button>
        <button onClick={fetchSingleData}>Fetch single data </button>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.title}<br/></li>
            ))
            }
        </ul>
    </div>
  )
}

export default HTTPReqestaxios;