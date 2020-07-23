import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
    
function Nav() {
    const navColor = {
        color: 'black'
      };
        return (
          <nav>
              <ul>
                  <Link style={navColor} to='/home'><li>Home</li></Link>
                  <Link style={navColor} to='/login'><li>Login</li></Link>
                  <Link style={navColor} to='/register'><li>Registration</li></Link>
                  <li>Logout</li>
              </ul>
          </nav>
        );
      }
      
export default Nav;