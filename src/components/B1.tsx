import React, { useState, useEffect } from 'react';

function ChangeTitle() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tiêu đề của bạn"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}

export default ChangeTitle;
