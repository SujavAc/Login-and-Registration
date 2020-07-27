import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export class Register extends React.Component {
  constructor(props) {    //constructor
    super(props);

    let register = false;  //initial value
    this.state = {          //variable initialization
      username: "",
      password: "",
      email: "",
      error: "",
      registerData: [],
      register,
      setOpen: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);     //bind the value of email from register form
    this.handleUsernameChange = this.handleUsernameChange.bind(this);     //bind the value of username from register form
    this.handlePasswordChange = this.handlePasswordChange.bind(this);      //bind the value of password from register form
    this.handleFormSubmit = this.handleFormSubmit.bind(this);         //bind the error value in state variable
  }
  handleFormSubmit = (e) => {
    this.setState({     //set the state variable with new value
      setOpen: true,
    });
    if (!this.state.username || !this.state.password || !this.state.email) {   //validation register form
      this.error = "please fill all inputs";
      this.setState({
        error: this.error,  //set the value of error.
      });
      
    } else {
      e.preventDefault();
      let registerData = [...this.state.registerData];
      registerData.push({        //push the values of username,email and password in the registerData array
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      });
      this.setState({    
        registerData,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        register: true,
      });

      this.error = "Successfully Registered";
      this.setState({
        error: this.error,
      });
      localStorage.setItem("register_details", JSON.stringify(registerData));  //set the array data in the local storage 
      console.log("Registered Data:", registerData);   //print out the array.
    }
  };
  handlePasswordChange = (e) => {  //function to get the password value from register form 
    this.setState({
      password: e.target.value,    //set the new value of password
    });
  };
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,   //set the new value of email
    });
  };

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,   //set the new value of username
    });
  };

  handleClose = (event, reason) => {
    this.setState({
      setOpen: false,
    });
  };

  render() {
    return (
      <div className="full">
        <div className="base-container">
          <div className="header">Register</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <TextField
                  label="First Name"
                  type="text"
                  name="username"
                  onChange={this.handleUsernameChange}
                  required
                />
              </div>

              <div className="form-group">
                <TextField
                  label="Email"
                  type="email"
                  color="primary"
                  name="email"
                  onChange={this.handleEmailChange}
                  required
                />
              </div>

              <div className="form-group">
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  onChange={this.handlePasswordChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <Button className="btn" onClick={this.handleFormSubmit}>
              Register
            </Button>

            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={this.state.setOpen}
              autoHideDuration={6000}
              onClose={this.handleClose}
              message={this.state.error}
              action={
                <React.Fragment>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={this.handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
