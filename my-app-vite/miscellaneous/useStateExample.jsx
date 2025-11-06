import React, { useState } from "react";
const UserStateExample = () => {

    // const [count,setCount]=useState(0);
    // return(
    //     <div>
    //         <h1>Count is:{count}</h1>
    //         <button onClick={()=>setCount(count+1)}>Increment</button>
    //         <button onClick={()=>setCount(count-1)}>Decrement</button>
    //     </div>
    // )

    const [led, setLed] = useState({
        brand: "Samsung",
        color:"Black"
    });
    const changeColor=()=>{
        setLed((preState)=>{
            return({...preState,color:"Silver"})
        }) 
    }

    return (
        <div>
            <h1>Colour: {led.color}</h1>

            <button onClick={changeColor}>Change The brand</button>
        </div>
    );
};
export default UserStateExample;
