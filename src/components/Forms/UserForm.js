import React, { useContext, useState } from 'react'
import InputMask from 'react-input-mask';
import Input from '../Generic/Input';
import { FormHeading } from '../Generic/FormHeading';
import AppContext from '../../context/appState/AppContext';
import Api from '../../Api';
import UsersContext from '../../context/users/UsersContext';

const UserForm=( props ) => {
  const endPoint='users/';
  const { onChange, values, nextStep, userFormStatus, setUserFormStatus, formVal, setFormVal }=props;

  const { showAlert, setAlert }=useContext( AppContext );
  const { Cookies }=useContext( UsersContext );


  const moveToNext=( e ) => {
    e.preventDefault();
    nextStep();

  }



  //?  Form Submission
  const handleUserFormSubmit=async ( e ) => {
    e.preventDefault();

    const cookie=Cookies.get( 'jwt' );
    const data={
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      CNIC: values.CNIC,
      passwordConfirm: values.passwordConfirm,
      phone: values.phone
    };

    try {
      let res;
      if ( !formVal.userId ) {
        res=await Api.post( endPoint,
          data,
          {
            // withCredentials: true,
            headers: { Authorization: `Bearer ${cookie}` }
          }
        )

      } else {

        res=await Api.patch( `users/${formVal.userId}`,
          data,
          {
            // withCredentials: true,
            headers: { Authorization: `Bearer ${cookie}` }
          }
        )
      }

      // console.log( res.data.status );
      if ( res.data.status==="success" ) {

        showAlert( `User has been ${formVal.userId? 'updated':'created'} successfully!`, "success" );
        setUserFormStatus( res.data.status );
        setFormVal( { ...formVal, userId: res.data.data.id } )

      }



    }
    catch ( err ) {
      console.log( err.response.data );
      showAlert( "Something went wrong! Please try again later", "danger" );
    }
  }

  return (
    <div>

      <div >
        <FormHeading value="User Details" subHeading="Fill out all user details" />
      </div>

      <form onSubmit={handleUserFormSubmit}>

        <div className="container" >
          <div className="row">


            <div className="col-6 text-end mt-3">

              <InputMask mask="99999-9999999-9" maskChar={null} type="text" id="inputCnic" placeholder='Enter CNIC' className='input' onChange={onChange} autoComplete="off" name="CNIC" style={{ width: "60%" }} defaultValue={values.CNIC} required />
              <p className="input_label_l" style={{ width: "60%" }}>CNIC</p>

            </div>



            <div className="col-6 inputBox mt-3">
              <Input placeholder="Enter email" width="60%" name="email" type="email" onChange={onChange} margin="" defaultValue={values.email} label='r' labelVal="Email Address" />

            </div>

            <div className="col-6 text-end inputBox mt-3">
              <Input placeholder="Enter firstname" width="60%" name="firstName" type="text" onChange={onChange} margin="" defaultValue={values.firstName} label='l' labelVal="First Name" />
            </div>

            <div className="col-6 mt-3">
              <Input placeholder="Enter lastname" width="60%" name="lastName" type="text" onChange={onChange} defaultValue={values.lastName} label='r' labelVal="Last Name" />
            </div>


            <div className="col-6 text-end mt-3">
              <Input placeholder="Enter Password" width="60%" name="password" type="password" onChange={onChange} defaultValue={values.password} label='l' labelVal="Password" />
            </div>

            <div className="col-6  mt-3">
              <Input placeholder="Confirm Password" width="60%" name="passwordConfirm" type="password" onChange={onChange} defaultValue={values.passwordConfirm} label='r' labelVal="Confirm Password" />
            </div>

            <div className="col-12  mt-3 text-center">
              <Input placeholder="Enter Phone no" width="60%" name="phone" type="text" onChange={onChange} defaultValue={values.phone} label='c' labelVal="Phone No" />
            </div>

            <div className='text-center mt-2 container'>
              {/* <button className="btn form_btn me-4" disabled={!values.CNIC||!values.email||!values.firstName||!values.lastName||!values.password||!values.passwordConfirm} onClick={moveToNext}>Next</button> */}

              <div className="col-12 text-center">
                <button type='submit' className="btn form_btn" disabled={!values.CNIC||!values.email||!values.firstName||!values.lastName||!values.password||!values.passwordConfirm||!values.phone} >{formVal.userId? 'Update':'Submit'}</button>
              </div>

              {/* disabled={userFormStatus==='fail'? true:false} */}
              <div className="col-12 text-end mb-3">
                {/* <button className="btn form_next_btn "  onClick={moveToNext}>next <span className='right_arrow'>&#8594;</span></button> */}
                <button className="btn form_next_btn " disabled={userFormStatus==='fail'? true:false} onClick={moveToNext}>next <span className='right_arrow'>&#8594;</span></button>

              </div>

            </div>


          </div>

        </div>


        {/* </div> */}



      </form>
    </div>

  )
}

export default UserForm