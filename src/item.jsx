import React, { Component } from "react";
import Input from "./input";

class Item extends Component {
  state = {};

  render() {
    return (
      <div>
        Item
        <Input name={"name"} />
        <Input name={"brand"} />
        <button>Focus name</button>
        <button>Focus brand</button>
      </div>
    );
  }
}

export default Item;
