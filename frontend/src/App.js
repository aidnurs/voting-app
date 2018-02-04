import React from "react";
//import axios from "axios";

import Poll from "../src/components/Poll.js";
import Navbar from "../src/components/Navbar.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderPolls = this.renderPolls.bind(this);
    this.state = {
      polls: [
        {
          title: "learn JS",
          options: ["yes", "maybe", "no"],
          votes: [0, 0, 0]
        },
        {
          title: "JS",
          options: ["yes"],
          votes: [0]
        },
        {
          title: "how many",
          options: ["1", "2"],
          votes: [0, 0]
        }
      ]
    };
  }
  renderPolls() {
    var polls = [];
    for (var i = 0; i < this.state.polls.length; i++) {
      polls.push(<Poll key={i} data={this.state.polls[i]} />);
    }
    return polls;
  }
  voteClick(i, j) {
    this.state.polls[i].votes[j]++;
  }
  render() {
    return (
      <div>
        <Navbar />
        <Poll data={this.state.polls[0]} />
        {/*{this.renderPolls()}*/}
      </div>
    );
  }
}

export default App;
