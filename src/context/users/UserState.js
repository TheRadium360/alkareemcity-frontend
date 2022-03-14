import React, { useState, useEffect } from 'react';
import UsersContext from './UsersContext';
// import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';
import Api from '../../Api';
import Cookies from 'js-cookie';


const UserState=( props ) => {
  
  const [ user, setUser ]=useState( {} );

  // if ( Cookies.jwt ) {
  //   const id=jwtDecode( Cookies.jwt ).id;
  //    const endPoint='users/'+id;
  //    const res= await Api.get(endPoint);
  //    setUser(res.data.data);
  // }

  const retrieveUserInfo=async ( id ) => {
    const endPoint='users/'+id;
    const res=await Api.get( endPoint );
    setUser( res.data.data );
    return res.data.data;
  }


  return (
    
    <UsersContext.Provider value={{ user, setUser, retrieveUserInfo, Cookies }}>
      {props.children}
    </UsersContext.Provider>

  )
}

export default UserState