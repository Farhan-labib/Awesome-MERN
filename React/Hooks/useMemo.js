import React, { useMemo } from 'react';

function ComplexComponent({ number }) {
  const computedValue = useMemo(() => {
    return computeExpensiveValue(number);
  }, [number]);  // Only recompute if number changes

  return <div>{computedValue}</div>;
}

function computeExpensiveValue(num) {
  // imagine some complex calculations here
  return num * num;
}
