import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onRest} className="btn btn-primary m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
