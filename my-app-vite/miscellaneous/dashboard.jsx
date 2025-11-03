import React from "react";

class DashBoardComponent extends React.Component{

    constructor(){
        super();
        this.state={colour:"red" ,type:"D1",year:2000}
    }
    newFunc=()=>{
        this.setState({type:"D2"});

    }

    render(){
        return(
            <div>
                <h1>This is our new Dashboard</h1> 
                <h1>This is new dashboard.it is of {this.state.colour} color and its type is {this.state.type}</h1>
                <button onClick={this.newFunc}>Change Property</button>
            </div>
        )
        
    }



}
export default DashBoardComponent;