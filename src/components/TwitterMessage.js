import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = { message: "", maxChars: props.maxChars };
  }

  handleChange = event => {
    const target = event.target;
    this.setState(previousState => {
      return {
        [target.name]: target.value,
        maxChars: previousState.maxChars !== 0 ? previousState.maxChars - 1 : 0
      };
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          maxLength={this.props.maxChars}
          onChange={this.handleChange}
          value={this.state.message}
        />
        <p>{this.state.maxChars} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
