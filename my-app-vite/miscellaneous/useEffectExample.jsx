import React, { useEffect, useState } from "react";

const UserEffectExample=()=>{
    
    const [like,setLike]=useState(0);
    const [value,setValue]=useState(0);
    useEffect(()=>{
        console.log("The component is mounted",like)
        return ()=>console.log("the component is unmounted",like)
    },[like])
    const changeLike=()=>{
        setLike((pre)=>pre+1);
    }
    const changeValue=()=>{
        setValue(()=>{return "JAVA"})
    }
    return(
        <div>
            <h1>Likes: {like} and value: {value}</h1>
            <button onClick={changeLike}>Incre</button>
            <button onClick={changeValue}>ChangeValue</button>
        </div>
    )
    
}
export default UserEffectExample;