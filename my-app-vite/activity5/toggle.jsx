import React from 'react'

const Toggle = () => {
  const [toggle, toggleState] = React.useState(true);
  const toggle1 = () => {
    if(toggle===true){
      toggleState(false);
    }
    else{
      toggleState(true);
    }
  } 
  
  return (
    <div>
        <h2>Toggle:</h2>
        <button onClick={toggle1}>{toggle ? "On" : "Off"}</button>
        
    </div>
  )
}

export default Toggle