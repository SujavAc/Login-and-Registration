import React from "react";
import "./style.scss";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export class Home extends React.Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
      data: []
    };

    this.user = JSON.parse(localStorage.getItem("register_details"));
    this.user.map((data) => (this.username = data.username));
    this.user.map((data) => (this.gmail = data.email));
    this.data=this.user;
  }
  handleClick(event) {
    localStorage.removeItem("token");
    this.setState({
      loggedIn: false,
    });
  }

  render() {
    const Data = this.data;

    if (this.state.loggedIn === false) {
      alert("Thank You ! login again to enter Home page");
      return <Redirect to="/login" />;
    }

    return (
      <div className="full">
        <div className="base-container">
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
              onClick={(event) => this.handleClick(event)}
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
