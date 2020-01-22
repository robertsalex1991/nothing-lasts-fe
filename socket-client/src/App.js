import "./App.css";
import React, { Component } from "react";
import { Router } from "@reach/router";
import Main from "./components/Main";
import Header from "./components/Header";
import ChatPage from "./components/ChatPage";
import socketIOClient from "socket.io-client";

class App extends Component {
  state = {
    endpoint: "http://192.168.100.127:4001",

    color: "white",

    input: "",
    messages: []
  };

  componentDidMount = () => {
    const { endpoint, color } = this.state;
    const socket = socketIOClient(endpoint);
    // setInterval(this.send(), 1000);
    socket.on("change color", col => {
      document.body.style.backgroundColor = col;
    });
  };

  render() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("change color", col => {
      document.body.backgroundColor = col;
    });
    return (
      <div style={{ textAlign: "center" }}>
        <Header />
        <Main>
          <Router>
            <ChatPage path="/chat" />
          </Router>
          <button onClick={() => this.send()}>Change Color</button>

          <button id="blue" onClick={() => this.setColor("blue")}>
            Blue
          </button>
          <button id="red" onClick={() => this.setColor("red")}>
            Red
          </button>
        </Main>
      </div>
    );
  }
  send = () => {
    const { endpoint, color } = this.state;
    const socket = socketIOClient(endpoint);
    socket.emit("change color", color);
  };

  setColor = color => {
    this.setState({ color });
  };
}

export default App;
