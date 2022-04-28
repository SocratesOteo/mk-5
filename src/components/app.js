import { useState } from "react";
import React from "react";
//const [count, setCount] = useState(0);

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.state = {password: ''}
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    const value = event.target.value
    this.setState({
      ...this.state,
      [event.target.name]: value});
    
  }

  
  handleSubmit(event) {
    const password = this.state.password
    const username = this.state.username
    const value = event.target.value
    alert(password + username );
    this.setState({
      ...this.state,
      [event.target.name]: value = ''
    })

    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span>
          >>&nbsp;
        </span>
          <label>
             Username:
            <br></br>
            <span>
              >>&nbsp;
            </span>
            <input  name = "username" 
            placeholder = "username..." 
            spellCheck = "false"
            id ="username-box" 
            type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
            <br></br>
            <span>
              >>&nbsp;
            </span>
          <label>
          Password:
          <br>
          </br>
          <span>
            >>&nbsp;
          </span>
          <input name = "password" 
          placeholder ="password..." 
          spellCheck = "false"
          id='password' 
          type="password" value={this.state.value} onChange={this.handleChange}/>

          </label>
      <br></br>

            <span>
              >>
            </span>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  
  
  
  export default NameForm;