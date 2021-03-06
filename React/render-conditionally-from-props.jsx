class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */}
    return (
      <div> {/*Using the prop that has been passed from GameOfChance */}
        <h1>{this.props.fiftyFifty ? "You Win" : "You Lose"}</h1>
      </div>
    );
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ //Adding to previous state by grabbing previous state and adding one. its basically Variable++
        counter: this.state.counter + 1
      });
    }
  
  render() {
    {/*Creating an expression in a variable HANDY */}
    const expression = Math.random() >= .5 ? true : false; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
         {/* PAssing the expression in a prop

            PROP CALLED fiftyFifty = that carries EXPRESSION. 

          */}
          <Results fiftyFifty={expression} />
        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
