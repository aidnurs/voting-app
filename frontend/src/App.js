import React from 'react';

function Vote(props) {
  var optArr = [];
  var countArr = [];
  for (var i = 0; i < props.data.options.length; i++) {
    optArr.push(
      <button onClick={props.onClick}>{props.data.options[i]}</button>
    );
    countArr.push(<div>{props.data.counter[i]}</div>);
  }
  return (
    <div>
      <div> {props.data.text}</div>
      <div> {optArr}</div>
      <div> {countArr}</div>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.renderVotes = this.renderVotes.bind(this);
    this.handler = this.handler.bind(this);
    this.state = {
      votes: [
        {
          text: 'learn react',
          options: ['yes', 'no', 'maybe'],
          counter: [5, 0, 3]
        },
        {
          text: 'learn js',
          options: ['yes', 'no', 'maybe'],
          counter: [52, 0, 33]
        }
      ]
    };
  }
  handler() {
    this.setState({
      votes: {}
    });
  }
  renderVotes() {
    var votes = [];
    for (var i = 0; i < this.state.votes.length; i++) {
      votes.push(
        <Vote onClick={this.handler} key={i} data={this.state.votes[i]} />
      );
    }
    return votes;
  }
  render() {
    return <div>{this.renderVotes()}</div>;
  }
}

export default App;
