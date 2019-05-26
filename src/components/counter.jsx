import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    console.log(this.props);

    return (
      <div>
        {this.props.children}
        <span className={this.getClasses()}>{this.formatCode()}</span>

        <button
          onClick={this.handleClick}
          type="button"
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
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
