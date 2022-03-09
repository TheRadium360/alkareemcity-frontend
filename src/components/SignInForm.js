import '../css/App.css';
import '../css/index.css'
import { FaEye } from "react-icons/fa";
import Api from '../Api';
import React, { useContext, useState } from 'react';
import UsersContext from '../context/users/UsersContext';
import { useNavigate } from 'react-router-dom';



const endPoint='users/login';

const SignInForm=() => {
  const { cookies, setCookie }=useContext( UsersContext );
  const [ credentials, setCredentials ]=useState( {
    email: "",
    password: ""
  } );

  const navigate=useNavigate();



  const handleLogin=async ( e ) => {
    e.preventDefault();
    const res=await Api.post( endPoint, credentials );
    console.log( res.data );

    if ( res.data.status==="success" ) {
      setCookie( "jwt", res.data.token );
      navigate( "/" );
    }


  }

  const onChange=( e ) => {
    setCredentials( { ...credentials, [ e.target.name ]: e.target.value } )
  }
  return (

    <div className='background' >
      <div className="clipPath"  >


        <div className='container SignInForm' >
          <div className='formHeading'><h1 >Welcome</h1>
            <p>Sign in to continue</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-3" >

              <input type="email" onChange={onChange} name="email"
                placeholder='Email' className='signUpInput' />

            </div>
            <div className="mb-3">
              <input type="password" name='password' onChange={onChange} placeholder='Password' className='signUpInput' /><span className='signin_icon' ><FaEye /></span>
            </div>
            <div className='d-flex'>
              <div className="form-check ">
                <input className="form-check-input checkboxInput" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label " htmlFor="flexCheckDefault" >
                  Remember me
                </label>
              </div>
              <div className='' style={{ marginLeft: "8.2rem" }}>Forget password</div>

            </div>

            <button type='submit' className="btn btn-dark signinButton">SIGN IN</button>
            <div className='faceboxSignIn'>Or Sign in With</div>
            <div className='checkbox_icons'><i className="fa-brands fa-google"></i> <i className="fa-brands fa-facebook-square"></i> <i className="fa-brands fa-instagram"></i></div>

          </form>
        </div>

      </div>
    </div>


  );
};

export default SignInForm;