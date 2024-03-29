import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

  const {isAuthenticated} = useAuth0();

  if(isAuthenticated) {
    return <Outlet />
  } 
}


export default ProtectedRoutes