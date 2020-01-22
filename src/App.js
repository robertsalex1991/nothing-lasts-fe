import React, { Component } from "react";
import "./App.css";
import io from "socket.io-client";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Main from "./components/Main";
import ChatPage from "./components/ChatPage";
const socket = io();

class App extends Component {
  state = {
    input: "",
    messages: []
  };

  componentDidMount() {
    socket.emit("logIn", { test: "test" });
  }

  render() {
    return (
      <>
        <Header />
        <Main>
          <Router>
            <ChatPage path="/chat" />
          </Router>
        </Main>
      </>
    );
  }
}
export default App;
