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
