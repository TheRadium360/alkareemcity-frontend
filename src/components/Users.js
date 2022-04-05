import React, { useRef, useEffect, useState, useContext } from "react";
import AppContext from "../context/appState/AppContext";
import { FormHeading } from "./FormHeading";
// import Input from "./Input";
// import InputMask from "react-input-mask";
// import { FormDropdown } from "./FormDropdown";
import Api from "../Api";
import UsersContext from "../context/users/UsersContext";
import UserDataTable from "./UsersDataTable";
import EditUsersModal from "./EditUsersModal";




export default function Users() {
  const { Cookies }=useContext( UsersContext );
  const [ users, setUsers ]=useState( [] );
  const { showAlert }=useContext( AppContext )


  const { onChangeGeneric }=useContext( AppContext );
  const [ details, setDetails ]=useState( {} );
  const [ disableInputs, setDisableInputs ]=useState( true );
  const [ formVal, setFormVal ]=useState( {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    CNIC: "",
    userId: "",

    plotNo: "",
    plotPrice: "",
    block: "",
    lat: "",
    lng: "",
    plotArea: "",
    plotType: "",

    plan: "",
    totalAmount: "",
    possessionAmount: "",
    installmentPerMonth: "",
    ballotAmount: "",
    bookingAmount: "",
    halfYearPayment: "",
    totalInstallmentCount: "",
  } );

  const getUsers=async () => {
    const cookie=Cookies.get( "jwt" );

    const res=await Api.get( "users", {
      headers: { Authorization: `Bearer ${cookie}` },
    } );
    setUsers( res.data.data.data );
  };


  const getAllDetails=( e, id ) => {
    if ( e.target.classList.contains( 'btn_id' ) ) {
      const data=users.filter( el => el.id===id )
      setDetails( data[ 0 ] )
      setFormVal( data[ 0 ] );
    }

  };



  const deleteUser=async ( e ) => {
    const cookie=Cookies.get( "jwt" );

    try {

    await  Promise.all([
        Api.delete( `users/${details.id}`,
        { headers: { Authorization: `Bearer ${cookie}` } }
      ),
      Api.delete( `plots/${details.plotInformation[0].id}`,
      { headers: { Authorization: `Bearer ${cookie}` } }
    ),
    Api.delete( `installment/${details.installmentPlan[0].id}`,
      { headers: { Authorization: `Bearer ${cookie}` } }
    ),
    Api.delete( `requestapproval/${details.id}`,
      { headers: { Authorization: `Bearer ${cookie}` } }
    )
        
      ])

     
  
      const data=users.filter( el => el.id!==details.id )
      setUsers( data )
      showAlert( 'User deleted!', 'success' )
    } catch ( err ) {
      showAlert( "Something went wrong!", 'danger' )

    }







  }

  const handleEdit=() => {
    if ( disableInputs===true ) {
      setDisableInputs( false );
    } else if ( disableInputs===false ) {
      setDisableInputs( true );
    }
  };


  useEffect( () => {
    getUsers();

  }, [] );

  // *******  on change fields event handler
  const onChange=onChangeGeneric( formVal, setFormVal );
  return (
    (
      <>
        {details&&<EditUsersModal details={details} setDetails={setDetails} formVal={formVal} setFormVal={setFormVal} handleEdit={handleEdit} disableInputs={disableInputs} setDisableInputs={setDisableInputs} setUsers={setUsers} users={users} onChange={onChange} />}

        <FormHeading value="Users" />

        <UserDataTable users={users} deleteUser={deleteUser} key={JSON.stringify( users )} getAllDetails={getAllDetails} />
      </>
    )
  );
}
