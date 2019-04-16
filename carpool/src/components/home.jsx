import React, { Component } from "react";
import "../css/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "#1DE6FD" }}>
        <header>
          <div class="fixed-header" style={{ backgroundColor: "#011716" }}>
            <nav>
              <a href="/" class="button">
                <span style={{ color: "white", fontWeight: "bold" }}>
                  <i class="fa fa-home"> Home </i>
                </span>
              </a>
              <a href="/login" class="button">
                <span style={{ color: "white", fontWeight: "bold" }}>
                  {" "}
                  Login{" "}
                </span>
              </a>
              <a href="/signup" class="button">
                <span style={{ color: "white", fontWeight: "bold" }}>
                  <i class="fa fa-child"> Sign Up </i>
                </span>
              </a>
              <a href="/form" class="button">
                <span style={{ color: "white", fontWeight: "bold" }}>
                  {" "}
                  Information{" "}
                </span>
              </a>
              <a href="/about" class="button">
                <span style={{ color: "white", fontWeight: "bold" }}>
                  <i class="fa fa-university"> About</i>
                </span>
              </a>
              <a href="/result" class="button">
                <span style={{ color: "white", fontWeight: "bold" }}>
                  {" "}
                  Result{" "}
                </span>
              </a>
              <a href="/logout" class="button">
                <span style={{ color: "white", fontWeight: "bold" }}>
                  <i class="fa fa-sign-out"> Logout</i>
                </span>
              </a>
            </nav>
          </div>
        </header>
        <br />
        <main role="main">
          <div class="container">
            <h1>Welcome</h1>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
