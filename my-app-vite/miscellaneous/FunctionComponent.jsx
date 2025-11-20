import React from 'react'

const FunctionComponent = () => {

    const[firstname,setfirstname]=React.useState("");
    const[lastname,setlastname]=React.useState("");
  return (
    <div>
        <form>
            FirstName: <input type="text" name="fname" value={this.state.fname} onChange={this.handleInputs}/><br/><br/>
            LastName: <input type="text" name="lname" value={this.state.lname} onChange={this.handleInputs}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default FunctionComponent