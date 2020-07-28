import React from "react";
import "./style.scss";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

let data = [{ username: "sujav", email: "acharya.sujav@gmail.com" }];
export class Login extends React.Component {
  constructor(props) {
    super(props);
    let loggedIn = false; //consider the loggedIn value false in the begining
    let token = localStorage.getItem("token"); //get the token value store in the local storage
    this.state = {
      //initial variables
      email: "",
      password: "",
      login: [],
      data: "",
      loggedIn,
      token,
      check: [],
      msg: "",
      setOpen: false,
    };
    this.handleClick = this.handleClick.bind(this); //bind the value in function handleClick
    this.render = this.render.bind(this);
    this.login = JSON.parse(localStorage.getItem("register_details")); //get the data stored in local storage using key register_detail
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleClick = (event) => {
    this.setState({
      setOpen: true,
    });
    if (this.login === null) {
      data.map((res) => (this.username = res.username));
      data.map((res) => (this.email = res.email));
      this.msg = "Invalid input";
      this.setState({
        msg: this.msg,
      });
    } else {
      this.login.map((data) => (this.gmail = data.email));
      this.login.map((data) => (this.pass = data.password));

      if (
        this.state.email === this.gmail &&
        this.state.password === this.pass
      ) {
        localStorage.setItem("token", "dshfgsdfyusgf43657843hb43ghgfhd"); //phase where the input email and password matched then the local storage stored the token to identify the user.
        this.setState({
          loggedIn: true,
        });
      } else {
        this.msg = "Enter valid inputs";
        this.setState({
          msg: this.msg,
        });
      }
    }
  };
  handleClose = (event, reason) => {
    this.setState({
      setOpen: false,
    });
  };

  render() {
    if (this.state.loggedIn === true) {
      //verify if the user is loggedIn and taken them directly to home page.
      return <Redirect to="/home" />;
    } else if (this.state.token) {
      // verify once loggeIn then they can't go to login page.
      alert("Already loggedin");

      return <Redirect to="/home" />;
    }

    return (
      <div className="full">
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Login</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <TextField
                  label="Email"
                  type="email"
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
            <Button
              variant="contained"
              type="button"
              className="btn"
              onClick={(event) => this.handleClick(event)}
            >
              Login
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={this.state.setOpen}
              autoHideDuration={3000}
              onClose={this.handleClose}
              message={this.state.msg}
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
export default Login;
