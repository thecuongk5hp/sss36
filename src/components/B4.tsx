import React, { useEffect, useRef } from 'react';

function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Nhập nội dung..." />
    </div>
  );
}

export default FocusInput;