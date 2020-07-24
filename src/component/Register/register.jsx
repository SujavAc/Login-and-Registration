import React from "react";
//import { Redirect } from 'react-router-dom';


export class Register extends React.Component {
  constructor(props) {
    super(props)
    let register=false;
    this.state={
        username:'',
        password:'',
        email:'',
        registerData:[],
        register
    };
    this.handleEmailChange=this.handleEmailChange.bind(this);
    this.handleUsernameChange=this.handleUsernameChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    
  }
  handleFormSubmit = (e) => {
    if(!this.state.username || !this.state.password ||!this.state.email){
      alert("please fill all inputs");
    }else {
    e.preventDefault();
    let registerData = [...this.state.registerData];
    registerData.push({
      username: this.state.username,
      password:this.state.password,
      email:this.state.email 
      
    });
    this.setState({
      registerData,
      username: this.state.username,
      password:this.state.password,
      email:this.state.email,
      register:true
    });
      alert('Successfully Registered ---> proceed to login');
      console.log('Registered Data:',registerData);
      localStorage.setItem('register_details',JSON.stringify(registerData));
    }
   
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
      
     
    });
  }
  handleEmailChange = (e) => {
    this.setState({
     
      email: e.target.value
      
    });
  } 

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
      
    });
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Full Name</label>
              <input type="text" name="username" id="username"  placeholder="Full Name"  onChange={this.handleUsernameChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" onChange={this.handleEmailChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder="Password"  onChange={this.handlePasswordChange} required/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.handleFormSubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }
}
export default Register;