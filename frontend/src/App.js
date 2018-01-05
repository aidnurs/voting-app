import React from 'react';

function Option(props) {
  return <div>opt</div>;
}

function Vote(props) {
  return <li>{props.value}</li>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      data: [
        {
          text: 'learn react',
          options: ['yes', 'no']
        },
        {
          text: 'learn vuejs',
          options: ['yes', 'no']
        }
      ]
    };
  }
  renderVote() {
    return (
      <div>
        <Vote value={this.state.data[0].text} />
        <Option value={this.state.data[0].options} />
      </div>
    );
  }
  render() {
    return (
      <div>
        <ul>{this.renderVote()}</ul>
      </div>
    );
  }
}

export default App;
