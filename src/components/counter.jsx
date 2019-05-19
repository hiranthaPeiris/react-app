import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags : ["tag1","tag2","tag3"]
  };
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <span className={this.getClasses()}>{this.formatCode()}</span>
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        <button type="button" className="btn btn-primary">
          Primary Bootsrap Button
        </button>
        <button type="button" className="btn btn-secondary">
          Cancel
        </button>
      </div>
    );
  }

  getClasses() {
    let classes = "badge badge-pill badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCode() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
