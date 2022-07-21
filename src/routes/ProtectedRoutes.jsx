import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useGlobalAuthContext } from '../Context/authContext';

const ProtectedRoutes = () => {
  const { user } = useGlobalAuthContext();
  console.log('din protected routes user-ul este :', user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
