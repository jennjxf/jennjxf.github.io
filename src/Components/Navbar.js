import React from 'react';
import {
  NavLink
} from 'react-router-dom';
import './../style/sharedStyle.css';

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <div id="navbar-logo">
          <NavLink 
            exact to="/"
          >
            {/* <img src="/images/jxfLogo.svg" alt="the letters j, x, and f" id="logo-default" /> */}
            {/* <img src="/images/image 4.svg" alt="chinese characters for feng jia xian" id="logo-secondary" /> */}
            <h4><span>馮佳嫻</span></h4>
          </NavLink>
        </div>
        <div id="navbar-links">
          <NavLink 
            to="/about"
            activeStyle={{
              textTransform: "uppercase",
              fontWeight: "bold"
            }}
          >
            About
          </NavLink>
          {/* <NavLink 
            to="/portfolio"
            activeStyle={{
              textTransform: "uppercase",
              fontWeight: "bold"
            }}
          >
            Portfolio
          </NavLink> */}
          <a href="/jennifer-feng-resume.pdf" target="_blank">Resume</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
