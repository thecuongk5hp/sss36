import React, { useState, useEffect } from 'react';

function Scroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      document.title = `Vị trí cuộn: ${scrollPosition}`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div style={{ height: '2000px' }}>
      <p>Scroll down to see the effect...</p>
    </div>
  );
}

export default Scroll;
