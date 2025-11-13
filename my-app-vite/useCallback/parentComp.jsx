import React, { useCallback, useState } from "react";
import ChildComp from "./childComp";

const ParentComp = () => {
    const [count,setCount]=useState(0);
    const incre=useCallback(()=>{
        setCount(pre=>pre+1)
    },[])
    const decre=useCallback(()=>{
        setCount(pre=>pre-1)
    },[])
    console.log("parent component rendered")
  return (
    <div>
        <h1>Count: {count}</h1>
        <ChildComp increment={incre} decrement={decre}/>
    </div>
  )
}

export default ParentComp;