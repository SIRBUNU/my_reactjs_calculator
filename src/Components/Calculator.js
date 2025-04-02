import React, { useState } from "react";
import "./Calculator.css";
import Button from "./Button";
import { evaluate } from 'mathjs';


function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(evaluate(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  const buttons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/"];

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <Button key={idx} value={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  );
}

export default Calculator; // ✅ Keep only this one
