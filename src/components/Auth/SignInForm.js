import '../../css/App.css';
import '../../css/index.css'
import { FaEye } from "react-icons/fa";
import Api from '../../Api';
import React, { useContext, useState } from 'react';
import UsersContext from '../../context/users/UsersContext';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/appState/AppContext';
import { Input} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const endPoint='users/login';

const SignInForm=() => {
  const { retrieveUserInfo, user, Cookies }=useContext( UsersContext );
  const { encryptData, showAlert }=useContext( AppContext );
  const [ credentials, setCredentials ]=useState( {
    email: "",
    password: ""
  } );

  const navigate=useNavigate();


  const handleLogin=async ( e ) => {
    e.preventDefault();
    try{
      
    const res=await Api.post( endPoint, credentials );
    
    if ( res.data.status==="success" ) {

      Cookies.set( 'jwt', res.data.token );
      const data = await retrieveUserInfo( res.data.data.user._id )

      const encData=encryptData( data );
      window.localStorage.setItem( 'UR', encData )
      // Cookies.set( 'UR', encData )

      if ( res.data.data.user.role==='user' ) {
        showAlert( 'Logged in successfully', 'success' )
        setTimeout( () => {
          navigate( '/dashboard/profile' )
        }, 4000 )
      } else {

        showAlert( 'Logged in successfully', 'success' )
        setTimeout( () => {
          navigate( '/dashboard' )
        }, 4000 )


      }

    }
  }catch(err){
    // console.log(err.response.data)
    showAlert(err.response.data.message,'danger')
  }

  }


  const onChange=( e ) => {
    setCredentials( { ...credentials, [ e.target.name ]: e.target.value } )
  }
  return (

    <div className='background' style={{ marginTop: "0px", height: "100vh" }}>
      <div className="clipPath" style={{ paddingTop: "100px", height: '100vh' }}>


        <div className='container SignInForm' >
          <div className='col-3'>
            <h1 className='text-center text-white mb-5'>Login</h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-3" >

              <input type="email" onChange={onChange} name="email"
                placeholder='Email' className='signUpInput' />
            </div>
            <div className="mb-3">
              {/* <input type="password" name='password' onChange={onChange} placeholder='Password' className='signUpInput' /><span className='signin_icon' ><FaEye /></span> */}
              <Input.Password
      placeholder="Password" className='signUpInput'
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      name="password" onChange={onChange} 
    />
            </div>
            <button type='submit' className="btn btn-dark signinButton">SIGN IN</button>
          </form>
        </div>

      </div>
    </div>


  );
};

export default SignInForm;