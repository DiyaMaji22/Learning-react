import React from "react";
const WithoutUseContext = () => {

    const [subject,setsubject]=React.useState("React");
    return(
        <div>
            <h2>This is the first component and oassing the subject as prop to c</h2>
            <ComponentA subject={subject}/>
        </div>
    )
}
const ComponentA=({subject})=>{
    return(
        <div>
            <h2>This is the componet a and recieving the prop from first one</h2>
            <ComponentB subject={subject}/>

        </div>  
    )}

const ComponentB=({subject})=>{
    return(
        <div>
            <h2>This is Component B and reciebving as props from Component A</h2>
            
            <h2>I am Studying the subject:{subject}</h2>
        </div>

    )
}
export default WithoutUseContext;