import React, { Component } from "react";
import Login from "./Login";
import Home from "./Home";
import Listing from "./Listing";
import { Link } from "react-router-dom";
import './index.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <ul className="ul">
          <li >
            <div className="mr-5">
              <Link to="/login" className="pagelink">Login</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/home" className="pagelink">Home</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/listing" className="pagelink">Listing</Link>
            </div>
          </li>
          
        </ul>
      </nav>
     
    
    );
  }
}

export default Header;
