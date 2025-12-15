
 import React from 'react'
 import './App.css'
 import { useState } from 'react';
 const App = () => {
  const [color,setColor]=useState('Red'); 

  const changeColor=()=>{

    if(color==='Red'){
      setColor("Blue");
    }
    else{
      setColor("Red")
    }
  }
   return (
     <div>
      <h2>My favourite colour is {color}</h2>
      <button onClick={changeColor}>Change Colour</button>
      

     </div>
   )
 }
 
 export default App