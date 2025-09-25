import React, { useState } from 'react';
import './Counter.css';

const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <h2>Functional Component</h2>
      <p>Count: {count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
      </div>
    </div>
  );
};

export default FunctionCounter;
