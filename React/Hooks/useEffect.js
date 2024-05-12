import React, { useState, useEffect } from 'react';

function UserComponent({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(setUser);
  }, [userId]);  // Only re-run if userId changes

  return (
    <div>{user ? `User: ${user.name}` : 'Loading...'}</div>
  );
}
