import React from 'react';

/*function Option(props) {
  return <div>opt</div>;
}*/

function Vote(props) {
  var arr = [];
  for (var i = 0; i < props.value.options.length; i++) {
    arr.push(<button>{props.value.options[i]}</button>);
  }
  return (
    <div>
      <li>{props.value.text}</li>
      {arr}
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: [],
      data: [
        {
          text: 'learn react',
          options: ['yes', 'no', 'maybe']
        },
        {
          text: 'learn vuejs',
          options: ['yes', 'no']
        }
      ]
    };
  }
  renderVotes(i) {
    var votes = [];
    for (var j = 0; j < i; j++) {
      votes.push(<Vote key={j} value={this.state.data[j]} />);
    }
    return <div>{votes}</div>;
  }
  render() {
    return <ul>{this.renderVotes(this.state.data.length)}</ul>;
  }
}

export default App;
