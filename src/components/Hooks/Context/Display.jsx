import React, { useContext } from 'react';

const Display = () => {
  return (
    <div className="my-2">
      {user ? (
        <p>You are logged in</p>
      ) : (
        <p>You are logged out in</p>
      )}
    </div>
  );
};

export default Display;