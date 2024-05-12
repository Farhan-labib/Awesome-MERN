import React, { useDebugValue, useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // Show label in React DevTools
  useDebugValue(isOnline ? 'Online' : 'Offline');

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    
  }, [friendID]);

  return isOnline;
}

function FriendStatus({ friendID }) {
  const isOnline = useFriendStatus(friendID);
  return <div>Friend is {isOnline ? 'Online' : 'Offline'}</div>;
}
