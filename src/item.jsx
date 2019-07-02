import React, { Component } from "react";
import Input from "./input";

class Item extends Component {
  state = {};
  inputRef = {};

  // ref callback
  setInputRef = element => {
    this.inputRef[element.name] = element;
  };

  render() {
    return (
      <div>
        Item
        <Input name={"name"} ref={this.setInputRef} />
        <Input name={"brand"} ref={this.setInputRef} />
        <button>Focus name</button>
        <button>Focus brand</button>
      </div>
    );
  }
}

export default Item;
