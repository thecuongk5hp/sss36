import React, { useEffect } from 'react';

export default function UseEffectComponent() {
    useEffect(() => {
        console.log("useEffect được gọi");
    });

  return (
    <div>UseEffect</div>
  );
}