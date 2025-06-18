import React, { useState } from "react";

const DynamicUpdateComp = () => {
  const [count, setCount] = useState(0);

  const updateIncrement = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={updateIncrement}>Increment</button>
    </div>
  );
};

export default DynamicUpdateComp