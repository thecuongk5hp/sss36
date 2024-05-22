import React, { useState } from 'react';

function CountClick() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Bạn đã click: {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Click để tăng</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CountClick;
