import React, { useState, useContext } from 'react'
import AppContext from '../../context/appState/AppContext'
import Input from '../Input'
import TextArea from '../TextArea'









function ComplaintForm() {

  const [ complaintFormCred, setComplaintFormCred ]=useState( { name: "", email: "", subject: "", description: "" } )
  const { onChangeGeneric }=useContext( AppContext );

  const onChange=onChangeGeneric( complaintFormCred, setComplaintFormCred );

  const handleSubmit=() => {


  }





  return (
    <>

      <form>

        <div className="container">
          <div className="row">

            <div className="col-6">
              <Input placeholder="Name" width="100%" name="name" type="text" onChange={onChange} />
            </div>

            <div className="col-6">
              <Input placeholder="Email" width="100%" name="email" type="email" onChange={onChange} />
            </div>

            <div className="col-12">
              <Input placeholder="Subject" width="100%" name="subject" type="text" onChange={onChange} />
            </div>

            <div className="col-12">
              <TextArea placeholder="Description" width="100%" name="description" rows={12} onChange={onChange} />
            </div>

            <div>
              <button type="submit" className="btn form_btn me-4">Submit</button>
              <button type="reset" className="btn reset_btn">Reset</button>
            </div>

          </div>


        </div>



      </form>


    </>
  )
}

export default ComplaintForm