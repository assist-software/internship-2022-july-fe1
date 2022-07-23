import React, { useContext, createContext, useState } from 'react';

import { APIAuth } from '../api/APIAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDataContext, setUserDataContext] = useState({});

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
    console.log(APIAuth.resetPass(email));
    APIAuth.resetPass(email);
  };

  //GET ALL DATA OF USER
  // const getUserData = () => {
  //   const x = APIAuth.getUserDataApi();
  //   console.log('in authContext', x);
  // };
  const getUserData = () => {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    fetch(
      `${APIAuth.url}/get/${localStorage.getItem('userId')}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setUserDataContext(data);
      });
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
        userDataContext,
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
