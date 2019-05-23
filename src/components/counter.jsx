import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags : ["tag1","tag2","tag3","tag4","tag5"]
  };
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <span className={this.getClasses()}>{this.formatCode()}</span>
        {this.renderTags()}
        <button type="button" className="btn btn-primary">
          Primary Bootsrap Button
        </button>
        <button onClick={this.handleClick} type="button" className="btn btn-secondary">
          Cancel
        </button>
        <button  type="button" className="btn btn-secondary">
          Exit
        </button>
      </div>
    );
  }
  handleClick(){
    this.setState({count: this.state.count+1});
  }

  renderTags(){
    if(this.state.tags.length===0){
      return <p>There are no tags</p>
    }
    return <ul>{this.state.tags.map(tag =><li key={tag}>{tag}</li>)}</ul>;
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
