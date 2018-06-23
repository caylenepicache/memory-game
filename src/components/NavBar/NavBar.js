//sets up the reusable Navbar component
import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Clicky Game</li>
          <li className="itemCenter">Top Score: {this.props.topScore}</li>
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;