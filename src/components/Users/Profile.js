import React from 'react'
import Input from '../Generic/EditInput'
import { FormHeading } from '../Generic/FormHeading'
import { useState, useContext, useEffect } from 'react';
import UsersContext from '../../context/users/UsersContext';
import Api from '../../Api';

export default function Profile() {
  const [ profile, setProfile ]=useState( {} );
  const { user, Cookies }=useContext( UsersContext );

  const getProfile=async () => {
    const cookie=Cookies.get( "jwt" );

    const res=await Api.get( `/users/${user.id}`, {

      headers: { Authorization: `Bearer ${cookie}` }

    } )
    setProfile( res.data.data )
  }
  useEffect( () => {
    getProfile()
  }, [] );
  return (
    <div>

      <div >
        <FormHeading value="My Profile" />
      </div>

      <form>

        <div className="container" >
          <div className="row">


            <div className="col-6 text-end mt-3">


              <Input placeholder="" width="60%" name="cnic" defaultValue={profile.CNIC} type="text" margin="" label='l' labelVal="CNIC" disabled={true} />

            </div>

            <div className="col-6 inputBox mt-3">
              <Input placeholder="" width="60%" name="email" defaultValue={profile.email} type="email" margin="" label='r' labelVal="Email Address" disabled={true} />

            </div>

            <div className="col-6 text-end inputBox mt-3">
              <Input placeholder="Enter firstname" width="60%" name="firstName" defaultValue={profile.firstName} type="text" label='l' labelVal="First Name" disabled={true} />
            </div>

            <div className="col-6 mt-3">
              <Input placeholder="Enter lastname" width="60%" name="lastName" type="text" disabled={true} defaultValue={profile.lastName} label='r' labelVal="Last Name" />
            </div>






          </div>

        </div>





      </form>
    </div>
  )
}