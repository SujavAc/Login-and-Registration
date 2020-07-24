import React from 'react';
import "./style.scss";
import {Redirect} from 'react-router-dom';


export class Home extends React.Component {

  constructor(props) {
    super(props);
    const token =localStorage.getItem('token');
    let loggedIn=true
    if(token===null){
      loggedIn=false
    }
    this.state={
      loggedIn
    }
    this.user=JSON.parse(localStorage.getItem('register_details'));
    this.user.map(data=>(
      this.username=data.username
    ))
  }
  handleClick(event){
    localStorage.removeItem('token');
    this.setState({
      loggedIn:false
    })
  }
    
  
  render() {
    if (this.state.loggedIn===false){
      alert('please Login first');
      return <Redirect to="/login" />
    }
    
    return (
        <div className="base-container">
        <div className="header">Home Page</div>
        <h1>Hi {this.username}!</h1>
        <div className="footer">
          <button type="button" className="btn" onClick={(event) => this.handleClick(event)}>
            LogOut
          </button>
        </div>
        </div>
    );
  }
}
  export default Home;


