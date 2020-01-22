import React, { Component } from "react";
import "./App.css";
import io from "socket.io-client";
import { Router } from "@reach/router";
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
    const { messages, input } = this.state;

    return (
      <div className="App">
        <header className="App-header"></header>

        <ul>
          {messages.map(message => {
            return <li>{message}</li>;
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={input}></input>
          <button>press me</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ input: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { input } = this.state;
    this.setState(currentState => {
      return { messages: [input, ...currentState.messages], input: "" };
    });
  };
}

export default App;
