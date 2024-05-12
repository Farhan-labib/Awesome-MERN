import React, { useState, useCallback } from 'react';

function Todo({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = useCallback(() => {
    addTodo(value);
    setValue('');
  }, [value, addTodo]);  // Only recreate if value or addTodo changes

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}
