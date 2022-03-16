import React, { useContext } from 'react'
import InputMask from 'react-input-mask';
import Input from '../Input';
import { FormHeading } from '../FormHeading';
import AppContext from '../../context/appState/AppContext';
import Api from '../../Api';
import queryString from 'query-string'
import axios from 'axios';
import UsersContext from '../../context/users/UsersContext';

const UserForm=( props ) => {
  const endPoint='users/';
  const { onChange, values, nextStep }=props;

  const { showAlert, setAlert }=useContext( AppContext );
  const { Cookies }=useContext( UsersContext );


  const moveToNext=( e ) => {
    e.preventDefault();
    showAlert( "User has been created", "danger" );

    nextStep();



  }

  const handleUserFormSubmit=async ( e ) => {
    e.preventDefault();
    const d={
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      CNIC: values.CNIC,
      passwordConfirm: values.passwordConfirm
    }

    const cookie=Cookies.get( 'jwt' );
    console.log( cookie )

    const data=JSON.stringify( d );


    console.log( data )


    try {
      const res=await Api.post( endPoint,
        data,
        {
          withCredentials: true,
        }

      )

      // const res=await Api.get( '/users', { withCredentials: true } )
      // const res=await axios( "http://127.0.0.1:3001/api/v1/users", {
      //   method: "post",
      //   data: data,
      //   withCredentials: true,

      // } )

      console.log( res );
      console.log( res.data );
      if ( res.data.status==="success" ) {
        // Cookies.set( 'jwt', res.data.token );
        // navigate( "/" );
      }



    }
    catch ( err ) {
      console.log( err );
    }
  }

  return (
    <div>

      <div className='my-5'>
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

            <div className='text-center mt-5 container'>
              {/* <button className="btn form_btn me-4" disabled={!values.CNIC||!values.email||!values.firstName||!values.lastName||!values.password||!values.passwordConfirm} onClick={moveToNext}>Next</button> */}

              <div className="col-12 text-center">
                <button type='submit' className="btn form_btn" >Submit</button>
              </div>


              <div className="col-12 text-end mb-3">
                <button className="btn form_next_btn " onClick={moveToNext}>next <span className='right_arrow'>&#8594;</span></button>

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