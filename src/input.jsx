import React from "react";

const Input = ({ name, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type="text" name={name} {...props} />
    </div>
  );
};

export default Input;
