import React from 'react'
import { themeContext } from './themeprovider.jsx';
const Themegetter = () => {
    const {theme,setTheme}=React.useContext(themeContext);
    const changeTheme=()=>{
        setTheme((utheme)=>{
            return utheme==='light'?'dark':'light'

        })
    }

  return (
    <div>
        <div style={{backgroundColor:theme==='light'?'white':'black'}}>
            <h1>The current theme is : {theme}</h1>
        </div>
        
        <button onClick={changeTheme}>Change Theme</button>

    </div>
  )
}

export default Themegetter