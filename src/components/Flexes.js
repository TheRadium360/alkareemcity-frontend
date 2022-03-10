import React from 'react'
import { FormDropdown } from './FormDropdown';
import { FileInputField } from './FileInputField';
import { FormHeading } from "./FormHeading";



export default function Flexes() {
  return (
    <div className="container">
     <div className="col-12">
       <FormHeading value='Flexes'/>
       </div>
   
      <div className="row mt-5">
    
     <div className="col-6 ">
       <FileInputField width='60%'/>
       </div>
        </div>

       
     </div>

    )
}
