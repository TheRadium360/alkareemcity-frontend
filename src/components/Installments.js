import React,{useContext} from 'react';
import UsersContext from '../context/users/UsersContext'; 
import DataTableComp from './DataTableComp';
import{ FormHeading} from './FormHeading'
import '../css/installment.css';


export default function Installments() {

const {user}=useContext(UsersContext);
// console.log(user.installmentPlan[0].remainingBalance);
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
    <DataTableComp {...user} />
    </>
    )
}
