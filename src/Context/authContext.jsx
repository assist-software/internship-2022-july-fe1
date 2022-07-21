import React, { useContext, createContext, useState } from 'react';

import { APIAuth } from '../api/APIAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
    localStorage.setItem('user', user);
  };
  const logout = () => {
    setUser(null);
    localStorage.clear();
  };
  const register = (email, pass) => {
    setUser(email);
    console.log(email);
    APIAuth.register(email, pass);
  };
  const token = () => {
    return localStorage.getItem('token');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom Hook
export const useGlobalAuthContext = () => {
  return useContext(AuthContext);
};
