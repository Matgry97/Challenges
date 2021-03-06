class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);


  }
  // Add handleChange() and submitMessage() methods here

  submitMessage() {
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    });
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      messages: this.state.messages
    });
  }

  render() {
    const messageMapped = this.state.messages.map(function(el) {return <li>{el}</li>});

    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }    
        <input onChange={this.handleChange}
        value={this.state.input}
        placeholder="Type here"/>
        <button onClick={this.submitMessage}>List</button>
        <ul>{messageMapped}</ul>

        { /* Change code above this line */ }
      </div>
    );
  }
};
