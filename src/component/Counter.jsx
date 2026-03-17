import React, { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  let handleDecrease = () => {
    if (count < 1) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <div className="counter-number">Curent Value :{count}</div>
      <div>
        {" "}
        <button className="counter-buttons" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className="counter-buttons" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="counter-buttons" onClick={() => setCount(count * 0)}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter;
