import React, { useState, useEffect } from 'react';
import UsersContext from './UsersContext';
import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';
import Api from '../../Api';



const UserState=( props ) => {
  
  const  [user, setUser] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  useEffect(async()=>{
    if(cookies.jwt){
     const id= jwtDecode(cookies.jwt).id;
     const endPoint='users/'+id;
     const res= await Api.get(endPoint);
     setUser(res.data.data);
    }
  },[cookies])
 
  return (
    
    <UsersContext.Provider value={{ cookies, setCookie, removeCookie,user,setUser }}>
      {props.children}
    </UsersContext.Provider>

  )
}

export default UserState