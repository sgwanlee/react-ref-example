## 커밋 내용으로 단계별로 보기

## Input Component

```javascript
import React from "react";

const Input = React.forwardRef(({ name, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type="text" name={name} ref={ref} {...props} />
    </div>
  );
});

export default Input;
```

## Item Component

```javascript
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
```
