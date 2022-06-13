import React, { useContext, useState,useEffect, useCallback } from 'react';
import UsersContext from '../../context/users/UsersContext'; 
import DataTableComp from './DataTableComp';
import{ FormHeading} from '../Generic/FormHeading'
import '../../css/installment.css';
import PayApprove from './PayApprove';
import AppContext from '../../context/appState/AppContext';
import jwtDecode from 'jwt-decode';
export default function Installments() {
  
  const { getUserInstallment ,Cookies,user}=useContext( UsersContext );
  const [installmentPlan,setInstallmentPlan]=useState();
  const [pending,setPending]=useState(false);
  const [ approvalRequestCreds, setApprovalRequestCreds ]=useState( {
        user: user.id,
        CNIC: user.CNIC,
        firstName: user.firstName.toLowerCase()
    } )
  
  const { onChangeGeneric }=useContext( AppContext );
  // const onChange=onChangeGeneric( approvalRequestCreds, setApprovalRequestCreds )



  
  useEffect( ()=>{
    
    if ( Cookies.get( 'jwt' ) ) {
      const userId=jwtDecode( Cookies.get( 'jwt' ) ).id;
      getUserInstallment( userId ).then((res)=>{
      
       console.log(res);
       setInstallmentPlan(res[0])
       setApprovalRequestCreds({...approvalRequestCreds,installment: res[0].id,
        plot: res[0].plot,})
      });
    }


  },[pending])
  


  return (
    installmentPlan ? <>
     <FormHeading value="Installment"/>
    <div className="row installmentRow">
      <div className="col-6 installmentLeft">
          <span className='installmentSubheading'>Total: </span> <span className='installmenSubheadingValue'>{installmentPlan.totalAmount} <small className="fw-bold"> PKR</small> </span>
      </div>
      <div className="col-6 installmentRight">
          <span className='installmentSubheading'>Remaining: </span> <span className='installmenSubheadingValue'>{installmentPlan.remainingBalance}<small className="fw-bold"> PKR</small></span>
      </div>
    </div>



      {/* Installment */}
      <PayApprove approvalRequestCreds={approvalRequestCreds} setApprovalRequestCreds={setApprovalRequestCreds} pending={pending} setPending={setPending}/>
     
 
    <DataTableComp installmentPlan={installmentPlan} pending={pending} setPending={setPending} key={pending} />
    </>:<>Add Spinner</>
    )
}
