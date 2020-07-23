import React from "react";
import './style.scss';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={
        email:'',
        password:'',
        login:[],
        data:''
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
      alert("verified user");
      
      
      
      
    }
    else{
      alert("Enter valid inputs");
      
    }
   
    }
    
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
    
          <div className="form">
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="text" name="email" placeholder="Email" onChange={this.handleEmailChange}/>
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