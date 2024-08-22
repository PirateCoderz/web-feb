import React, { useState } from 'react';
function Counter() {
  // Initialize state with useState
  const [count, setCount] = useState(0);
  // Function to increment the count
  // const increment = () => {
  //     setCount(count + 1);
  // };

  const increment = () => {
    setCount(prevCount => prevCount + 1 );  // Use prevCount to avoid race conditions
  }
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default Counter;
