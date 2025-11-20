import React, { Component } from 'react'

export default class Controlledcomponent extends Component {
  constructor(){
        super();
        this.state = {
            fname: '',
            lname: ''
        };
    }
    // changeFirstName = (e) => {
    //     this.setState({fname: e.target.value});
    // }
    // changeLastName = (e) => {
    //     this.setState({lname: e.target.value});
    // }
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert(`First Name: ${this.state.fname} \n Last Name: ${this.state.lname}`);
    // }

    handleInputs=(e)=>{
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
     
    render() {
    
    return (
      <div onSubmit={this.handleSubmit}>
        <form>
            FirstName: <input type="text" name="fname" value={this.state.fname} onChange={this.handleInputs}/><br/><br/>
            LastName: <input type="text" name="lname" value={this.state.lname} onChange={this.handleInputs}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
