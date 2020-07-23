import React from "react";



export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        username:'',
        password:''
    }
  }

  handleClick(event){
    
    }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={(event) => this.handleClick(event)}>
            Login
          </button>
          <button type="button" className="btn" >
            Register
          </button>
        </div>
      </div>
    );
  }
}