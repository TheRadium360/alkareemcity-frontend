import './App.css';
import { FaEye } from "react-icons/fa";
import React from 'react';

const SignupForm = () => {
    return (
        <div className='container ' >
          <h1 className='formHeading'>Sign Up</h1>
            <form className='form1'>
  <div className="mb-3" >

    <input type="text"  id="exampleInputEmail1" aria-describedby="emailHelp"
     placeholder='Full Name'  className='signUpInput' />
 
  </div>
  <div className="mb-3">
    <input type="email"  id="exampleInputPassword1" placeholder='Email' className='signUpInput'/>
  </div>

  <div className="mb-3">
    <input type="password"  id="exampleInputPassword12" placeholder='Password' className='signUpInput'/><span className='forminput_icon' ><FaEye/></span> 
  </div>

  <div className="mb-3">
    <input type="password"  id="exampleInputPassword13" placeholder='Confirm Password' 
     className='signUpInput'/><span className='forminput_icon'><FaEye/></span> 
  </div>
 
  <div className="form-check checkbox">
  <input className="form-check-input checkboxInput" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label " htmlFor="flexCheckDefault" >
    I agree with <span className='span'>privacy</span> & <span className='span'>policy</span>
  </label>
</div>

  <div className="btn btn-dark signupButton"   >SIGN UP</div>

</form>
<div className='row login'>
<div className='col-3 text-muted'>Already have an account ?</div>
<div className='col-3'>LOGIN</div>
</div>
        </div>
    );
};

export default SignupForm;