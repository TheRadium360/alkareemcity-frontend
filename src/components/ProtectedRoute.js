import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import UsersContext from "../context/users/UsersContext";

const ProtectedRoute=( {
  redirectPath='/signup',
  children,
} ) => {

  // Check user token here
  const { cookies }=useContext( UsersContext );


  if ( !cookies.jwt ) {

    return <Navigate to={redirectPath} replace />;

  }

  return children;
};


export default ProtectedRoute;