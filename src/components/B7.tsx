import React, { useState, useRef, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    prevCountRef.current = count;
  });

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>Giá trị hiện tại: {count}</p>
      <p>Giá trị trước: {prevCountRef.current}</p>
      <button onClick={handleIncrease}>Tăng</button>
      <button onClick={handleDecrease}>Giảm</button>
    </div>
  );
}

export default Counter;