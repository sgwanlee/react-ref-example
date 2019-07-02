import React, { Component } from "react";
import Input from "./input";

class Item extends Component {
  state = {};
  inputRef = {};

  // ref callback
  setInputRef = element => {
    this.inputRef[element.name] = element;
  };

  handleClick = name => {
    this.inputRef[name].focus();
  };

  render() {
    return (
      <div>
        Item
        <Input name={"name"} ref={this.setInputRef} />
        <Input name={"brand"} ref={this.setInputRef} />
        <button onClick={() => this.handleClick("name")}>Focus name</button>
        <button onClick={() => this.handleClick("brand")}>Focus brand</button>
      </div>
    );
  }
}

export default Item;
