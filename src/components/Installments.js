import React, { useContext, useState } from 'react';
import UsersContext from '../context/users/UsersContext';
import DataTableComp from './DataTableComp';
import { FormHeading } from './FormHeading'
import '../css/installment.css';
import PayApprove from './PayApprove';
import AppContext from '../context/appState/AppContext';

export default function Installments() {

  const { user }=useContext( UsersContext );
  const [ approvalRequestCreds, setApprovalRequestCreds ]=useState( {
    installment: user.installmentPlan[ 0 ].id,
    user: user.id,
    plot: user.installmentPlan[ 0 ].plot,
    CNIC: user.CNIC,
    firstName: user.firstName.toLowerCase()

  } )

  const { onChangeGeneric }=useContext( AppContext );

  const onChange=onChangeGeneric( approvalRequestCreds, setApprovalRequestCreds )

  console.log( user );
  console.log( "USER ID: ", user.id );
  console.log( "Installment ID: ", user.installmentPlan[ 0 ].id );
  console.log( "Plot ID: ", user.installmentPlan[ 0 ].plot );


  return (
    <>
     <FormHeading value="Installment"/>
    <div className="row installmentRow">
      <div className="col-6 installmentLeft">
      <span className='installmentSubheading'>Total: </span> <span className='installmenSubheadingValue'>{user.installmentPlan[0].totalAmount}</span>
      </div>
      <div className="col-6 installmentRight">
        <span className='installmentSubheading'>Remaining: </span> <span className='installmenSubheadingValue'>{user.installmentPlan[0].remainingBalance}</span>
      </div>
    </div>

      {/* Installment */}
      <PayApprove approvalRequestCreds={approvalRequestCreds} setApprovalRequestCreds={setApprovalRequestCreds} />
    <DataTableComp {...user} />
    </>
    )
}
