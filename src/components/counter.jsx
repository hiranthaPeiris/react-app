import React, { Component } from "react";

class Counter extends Component {
  state = {
    count :0
  };
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <span>{this.formatCode()}</span>
        <button type="button" className="btn btn-primary">Primary Bootsrap Button</button>
        <button type="button" className="btn btn-secondary">Cancel</button>
      </div>
    );
  }
  
  formatCode () {
    const {count} = this.state;
    return count === 0 ? "Zero" : count;
  }
  
}


export default Counter;
