import React from "react";
import './style.scss';
import { Redirect } from "react-router-dom";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    let loggedIn=false;
    let token=localStorage.getItem('token');
    this.state={
        email:'',
        password:'',
        login:[],
        data:'',
        loggedIn,
        token
    }
  }
  handleEmailChange = (e) => {
    this.setState({
     
      email: e.target.value
      
    });
  } 
  handlePasswordChange = (e) => {
    this.setState({
     
      password: e.target.value
      
    });
  } 


  handleClick(event){
    
     this.login=JSON.parse(localStorage.getItem('register_details'));
    this.login.map(data=>(
      
      this.gmail=data.email
    ))
    this.login.map(data=>(
      this.pass=data.password
    )) 
    
    if(this.state.email===this.gmail && this.state.password===this.pass){
      console.log("verified user");
      localStorage.setItem('token',"dshfgsdfyusgf43657843hb43ghgfhd");
      this.setState({
        loggedIn:true
      });
      
      
      
      
      
      
    }
    else{
      alert("Enter valid inputs");
      
    }
   
    }
    
  render() {
    if(this.state.loggedIn===true){
      return <Redirect to="/home" />
    }
    else if(this.state.token){
      alert('Already loggedin');
      return <Redirect to="/home" />
    }
    
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        
        <div className="content">
    
          <div className="form">
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="email" name="email" placeholder="Email" onChange={this.handleEmailChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handlePasswordChange}/>
              
            </div>
          </div>
        </div>
        
        <div className="footer">
          <button type="button" className="btn" onClick={(event) => this.handleClick(event)}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
export default Login;