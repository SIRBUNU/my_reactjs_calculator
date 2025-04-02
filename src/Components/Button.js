import React from "react";
import "./Button.css";

const Button = ({ value, onClick }) => {
  const className =
    value === "C" ? "button clear" : ["+", "-", "*", "/"].includes(value) ? "button operator" : "button";

  return (
    <button className={className} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;
