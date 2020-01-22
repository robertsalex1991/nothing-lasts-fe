import React, { Component } from "react";
import EnterMessage from "./EnterMessage";

class ChatPage extends Component {
  state = {
    messages: [
      { username: "Tommy", user_id: 1, body: "Hi guys" },
      { username: "Alex", user_id: 1, body: "yo" },
      { username: "Emily", user_id: 1, body: "hey" },
      {
        username: "doug",
        user_id: 1,
        body:
          "Hi guys Hi guys Hi guys Hi guys Hi guys Hi guys Hi guys Hi guys Hi guys Hi guys Hi guys Hi guys Hi guys Hi guys Hi guys Hi guys "
      },
      { username: "Paula", user_id: 1, body: "sup" }
    ]
  };


  
  render() {
    const { messages } = this.state;

    // const { endpoint } = this.state;
  // const socket = socketIOClient(endpoint);
  // socket.on("change color", col => {
  //   document.body.backgroundColor = col;
  // });

    return (
      <div>
        <ul>
          {messages.map(({ username, user_id, body }, index) => {
            return (
              <li key={index}>
                <h4>{username}</h4>
                <p>{body}</p>
              </li>
            );
          })}
        </ul>
        <EnterMessage addMessage={this.addMessage} />
      </div>
    );
  }

  

  addMessage = message => {
    const exampleMessage = { username: "doug", body: message };

    this.setState(currentState => {
      return { messages: [...currentState.messages, exampleMessage] };
    });
  };
}

export default ChatPage;
