import React, { useState, useEffect } from 'react';
import UsersContext from './UsersContext';
import Api from '../../Api';




const login =async (user_creds)=>{
  const res = await Api.post('/api/v1/users/login',user_creds)
  console.log(res)
}


const UserState=( props ) => {
  const  [user, setUser] = useState();
 

  return (

    <UsersContext.Provider value={{ login }}>
      {props.children}
    </UsersContext.Provider>

  )
}

export default UserState