// import "./App.css";
// import React, { Component } from "react";
// import socketIOClient from "socket.io-client";

// class App extends Component {
//   state = {
//     endpoint: "http://192.168.100.127:4001",

//     color: "white"
//   };

//   componentDidMount = () => {
//     const { endpoint, color } = this.state;
//     const socket = socketIOClient(endpoint);
//     // setInterval(this.send(), 1000);
//     socket.on("change color", col => {
//       document.body.style.backgroundColor = col;
//     });
//   };

//   render() {
//     const { endpoint } = this.state;
//     const socket = socketIOClient(endpoint);
//     socket.on("change color", col => {
//       document.body.backgroundColor = col;
//     });
//     return (
//       <div style={{ textAlign: "center" }}>
//         <button onClick={() => this.send()}>Change Color</button>

//         <button id="blue" onClick={() => this.setColor("blue")}>
//           Blue
//         </button>
//         <button id="red" onClick={() => this.setColor("red")}>
//           Red
//         </button>
//       </div>
//     );
//   }
//   send = () => {
//     const { endpoint, color } = this.state;
//     const socket = socketIOClient(endpoint);
//     socket.emit("change color", color);
//   };

//   setColor = color => {
//     this.setState({ color });
//   };
// }

// export default App;
