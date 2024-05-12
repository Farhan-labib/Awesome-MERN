import React, { useLayoutEffect, useRef } from 'react';

function MeasureExample() {
  const divRef = useRef();

  useLayoutEffect(() => {
    const rect = divRef.current.getBoundingClientRect();
    console.log(rect.height);
  }, []); // Runs right after the DOM is updated, but before painting

  return <div ref={divRef}>Hello, world!</div>;
}
