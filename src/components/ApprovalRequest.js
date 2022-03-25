import React, { useEffect, useState, useContext } from 'react'
import UsersContext from '../context/users/UsersContext';
import AppContext from '../context/appState/AppContext';
import Api from '../Api';
import ApprovalRequestDataTable from './ApprovalRequestDataTable';
import ApprovalRequestModal from './ApprovalRequestModal';



const ApprovalRequest=() => {

  const [ requests, setRequests ]=useState( [] );
  const [ modalData, setModalData ]=useState( {} );
  // const []


  const { user, Cookies }=useContext( UsersContext );
  const { showAlert }=useContext( AppContext );


  const getRequests=async () => {

    const cookie=Cookies.get( 'jwt' )

    const res=await Api.get( "requestapproval",
      {
        headers: { Authorization: `Bearer ${cookie}` }
      } )
    const requestData=res.data.data.data;

    console.log( res.data.data.data );
    setRequests( requestData );

  }


  useEffect( () => {
    getRequests();
  }, [] )

  const handleClick=( e ) => {
    // function handleClick=( id, e ) => {

    // console.log( e.target )
    if ( e.target.classList.contains( 'show_table_btn' ) ) {


      const id=e.target.getAttribute( 'aid' )
      const data=requests.filter( el => el.id===id );
      setModalData( data[ 0 ] )

      e.target.click();


    }

  }

  return (
    // <div>ApprovalRequest</div>
    <>
      {requests.length!==0&&<ApprovalRequestDataTable requests={requests} handleClick={handleClick} />}
      <ApprovalRequestModal data={modalData} setModalData={setModalData} completeData={requests} setRequests={setRequests} />



    </>
  )
}

export default ApprovalRequest