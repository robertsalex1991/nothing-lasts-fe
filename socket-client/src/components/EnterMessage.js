import React, { Component } from "react";

class EnterMessage extends Component {
  state = {
    input: ""
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={input} />
          <button>Send</button>
        </form>
      </div>
    );
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ input: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addMessage(this.state.input);
    this.setState({ input: "" });
  };
}

export default EnterMessage;
