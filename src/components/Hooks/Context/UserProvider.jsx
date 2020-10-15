import React, { useState, createContext } from 'react';

// import { UserContext } from 'UserProvider' // do this in files we want to subscribe to the provider
export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider; // publisher / subscriber pattern

// {user, setUser} can also be {user: user, setUser: setUser} but excluding the keys, javascript takes care of automatically