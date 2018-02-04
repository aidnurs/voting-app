import React from "react";

class Vote extends React.Component {
  renderButtons() {
    var buttons = [];
    for (var i = 0; i < this.props.data.options.length; i++) {
      buttons.push(<button onClick=()>{i}</button>);
    }
    return buttons;
  }
  render() {
    return (
      <div>
        <div >{this.props.data.title}</div>
        <div>{this.props.data.options}</div>
        {this.renderButtons()}
        <div>{this.props.data.votes}</div>
      </div>
    );
  }
}

export default Vote;
