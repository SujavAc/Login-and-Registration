import React from 'react';
import './App.css';
import {Register} from "./component/Register/register";
import {Home} from "./component/Register/home";
import Nav from './component/Register/Nav';
import Login from './component/Register/login';

import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/home" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
