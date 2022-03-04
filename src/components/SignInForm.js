import './App.css';

import { FaEye} from "react-icons/fa";

import React from 'react';

const SignInForm = () => {
    return (
        <div className='container SignInForm' >
          <div className='formHeading'><h1 >Welcome</h1>
          <p>Sign in to continue</p>
          </div>
            <form >
  <div className="mb-3" >

    <input type="text"  id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder='User Name'  className='signUpInput' />
 
  </div>
  <div className="mb-3">
    <input type="password"  id="exampleInputPassword12" placeholder='Password' className='signUpInput'/><span className='signin_icon' ><FaEye/></span> 
  </div>


  <div className="row container">
<div className='col-3 text-muted '> 
    <input className="form-check-input checkboxInInput" type="checkbox" value="" id="flexCheckDefault" />
    <label className="form-check-label " htmlFor="flexCheckDefault" >
    Remember me 
   </label>
   </div>
<div className='col-3 checkboxPassword'> <a href='#'>Forgot Password</a></div>
</div>

  <div className="btn btn-dark signinButton"   >SIGN IN</div>
  <div className='faceboxSignIn'>Or Sign in With</div>
  <div className='checkbox_icons'><i class="fa-brands fa-google"></i> <i class="fa-brands fa-facebook-square"></i> <i class="fa-brands fa-instagram"></i></div>

</form>
        </div>
    );
};

export default SignInForm;