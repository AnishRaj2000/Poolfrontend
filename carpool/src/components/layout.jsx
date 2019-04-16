import React, { Component } from "react";
import "../css/main.css";

class Layout extends Component {
  state = {};
  render() {
    return (
      <body>
        <header>
          <div>
            <nav>
              <a href="/">
                <span> Home </span>
              </a>
              <a href="/login">
                <span> Login </span>
              </a>
              <a href="/signup">
                <span> Sign Up </span>
              </a>
              <a href="/form">
                <span> Information </span>
              </a>
              <a href="/about">
                <span> About </span>
              </a>
              <a href="/result">
                <span> Result </span>
              </a>
              <a href="/logout">
                <span> Logout </span>
              </a>
            </nav>
          </div>
        </header>
      </body>
    );
  }
}

export default Layout;
