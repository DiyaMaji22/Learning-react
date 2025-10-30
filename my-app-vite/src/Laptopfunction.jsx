import React from "react"

function LaptopFunction(props){
    
    return(
        <div>
            <h1>This is the laptop function</h1>
            <h1>The colour of the laptop is {props.colour} and the brand is {props.brand} and model is {props.model} and the width is {props.config.ram}</h1>
        </div>
    )

}
export default LaptopFunction;