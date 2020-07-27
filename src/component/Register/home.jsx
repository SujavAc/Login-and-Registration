import React from "react";
import "./style.scss";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/icons/Lock";

import Dialog from "@material-ui/core/Dialog";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Button } from "@material-ui/core";






import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import {AiFillFacebook} from 'react-icons/ai';
import {GrInstagram} from 'react-icons/gr';
import {AiFillYoutube} from 'react-icons/ai';
import {GrLinkedin} from 'react-icons/gr'
import {FaTwitterSquare} from 'react-icons/fa'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;    //transition function to make the dialogue box from bottom to up direction
});
let actions = [
  { icon: <AiFillFacebook />, link:'https://www.facebook.com/sujav.acharya.5', name: 'Facebook' },
  { icon: <GrInstagram />,link:'https://www.instagram.com/sujav__/', name: 'Instagram' },
  { icon: <AiFillYoutube />,link:'https://www.youtube.com/channel/UCQkbasC7yKwW1NS04uGb5VQ?view_as=subscriber', name: 'Youtube' },
  { icon: <GrLinkedin />,link:'https://www.linkedin.com/in/sujav-a-72630416b/', name: 'LinkedIn' },
  { icon: <FaTwitterSquare />,link:'https://twitter.com/acharya_sujav', name: 'Twitter' },
];
export class Home extends React.Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem("token");    //get token from local storage and assign token value.
    let loggedIn = true;
    
    if (token === null) {   //condition to verify user if they visit the home tab after login or without login by checking the token value
      loggedIn = false;
    }
    this.state = {
      loggedIn,
      data: [],
      msg: "",
      setOpen: false,
      hidden:false,
      setHidden:false,
      direction:"up",
      setDirection:"up",
      speeddial: false
    };

    this.handleDialogueClose = this.handleDialogueClose.bind(this);   //this bind the value getting from handleDialogueClose function.
    this.handleClickDialogueOpen = this.handleClickDialogueOpen.bind(this);     //this bind the value getting from handleClickDialogueOpen function.

    this.handleClickOpen = this.handleClickOpen.bind(this);   //this bind the value getting from handleClickOpen function.
    this.handleClose = this.handleClose.bind(this);     //this bind the value getting from handleClose function.

    this.render = this.render.bind(this);     //this bind the value getting from render function.
    this.user = JSON.parse(localStorage.getItem("register_details"));   //get data from local Storage using key value
    this.user.map((data) => (this.username = data.username));    //get username of user data.
    this.user.map((data) => (this.gmail = data.email));
    this.data = this.user;
  }
  handleClick(event) {
    localStorage.removeItem("token");   //when logout button click it removes the token.
    this.setState({
      loggedIn: false,     //when logout it removes the loggedIn state to false, that means no one access to homepage untill they logged in with the username and passwor
    });
  }
  handleClickDialogueOpen = () => { /// this function trigger the dialogue box and set the state of setOpen to true.
    this.setState({
      setOpen: true,
    });
  };
  handleDialogueClose = (event, reason) => {     // this will close the dialogue box.
    this.setState({
      setOpen: false,
    });
  };
  handleClickOpen = () => { /// this function trigger the dialogue box and set the state of setOpen to true.
    this.setState({
      speeddial: true,
    });
  };
  handleClose = (event, reason) => {     // this will close the dialogue box.
    this.setState({
      speeddial: false,
    });
  };
   handleDirectionChange = (event) => {
    this.setDirection(event.target.value);
  };
  handleHiddenChange = (event) => {
    this.setHidden(event.target.checked);
  };

  render() {
    const Data = this.data;

    if (this.state.loggedIn === false) {    //checked the user state is loggedIn or not.
      alert("Thank You ! login again to enter Home page");    //Alert the message to user
      
      
     return <Redirect to="/login" />;  //redirect the user to the login page to loggedIn with the username and password.
    }

    return (
      <div className="full">
        <div className="base-container">
          <div className="tag">
            <LockIcon className="tag1" onClick={this.handleClickDialogueOpen} />{" "}
            {this.username}
          </div>
          <div className="header">Home Page</div>

          <Card className="root">
            <CardContent>
              <Typography>
                Welcome <b>{this.username}</b>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                “The most wasted of days is one without laughter.”
                <br></br>– E.E. Cummings.
              </Typography>
            </CardContent>
          </Card>

          <div className="data">
            <p>Users</p>
            {Data.map((res) => (
              <div key={res.username}>
                <Card>
                  <CardContent>
                    <Typography>
                      <b>{res.username}</b>
                    </Typography>
                    <Typography>
                      <b>{res.email}</b>
                    </Typography>
                  </CardContent>
                </Card>
                <br></br>
              </div>
            ))}
          </div>

          <div className="footer">
            <button
              type="button"
              className="btn"
              onClick={this.handleClickDialogueOpen}
            >
              LogOut
            </button>
            <Dialog
              open={this.state.setOpen}
              TransitionComponent={Transition}
              keepMounted
              onClose={this.handleDialogueClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">ALERT!!</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Do you really want to LogOut??
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleDialogueClose} color="primary">
                  CANCEL
                </Button>
                <Button
                  onClick={(event) => this.handleClick(event)}
                  color="primary"
                >
                  LOGOUT
                </Button>
              </DialogActions>
            </Dialog>


            <div align="right" className="speeddial">
        <SpeedDial
          ariaLabel="SpeedDial example"
          
          hidden={this.hidden}
          icon={<SpeedDialIcon />}
          onClose={this.handleClose}
          onOpen={this.handleClickOpen}
          open={this.state.speeddial}
          direction={this.direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              href={action.link}
              tooltipTitle={action.name}
              onClick={this.handleClose}
            />
          ))}
        </SpeedDial>
        </div>
    
          </div>
          
          <div>
         
      
      
      
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
