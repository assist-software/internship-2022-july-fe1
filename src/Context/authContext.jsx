import React, { useContext, createContext, useState } from 'react';

import { APIAuth } from '../api/APIAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  //REGISTER AND LOGIN
  const register = (email, pass, mode) => {
    APIAuth.register(email, pass, mode);
  };

  //RESET PASSWORD
  const resetPassword = (email) => {
    APIAuth.resetPass(email);
  };

  //GET ALL DATA OF USER
  const getUserData = (id) => {
    APIAuth.getUserDataApi(id);
  };

  const token = () => {
    return localStorage.getItem('token');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        logout,
        token,
        resetPassword,
        getUserData,
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
