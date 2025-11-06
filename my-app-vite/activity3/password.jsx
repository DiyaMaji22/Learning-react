import React, { useState } from "react"


const Password=()=>{

    const[show,setshow]=useState('password');
    const [pass,setpass]=useState('show')
    const changeState=()=>{
        // setshow(()=>{return 'Hide Password'})
        if(show=='password'){
            setshow('text')
            setpass('Hide')
        }
        else{
            setshow('password')
            setpass('Show')
        }
    }
    return(
        <div>
            <input type={show} placeholder="Enter the password" required />
            <button onClick={changeState}>{pass}</button>
        </div>
    )

}
export default Password;