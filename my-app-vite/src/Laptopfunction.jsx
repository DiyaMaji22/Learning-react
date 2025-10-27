import React from "react"

function LaptopFunction(props){
    return(
        <div>
            <h1>This is the laptop function</h1>
            <h1>The colour of the laptop is {props.colour} and the brand is {props.brand}</h1>
        </div>
    )

}
export default LaptopFunction;