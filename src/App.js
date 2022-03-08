import './css/index.css'
// import './welcome.css'
import React, { Component }  from 'react';
import './css/index.css'
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import SignInForm from './components/SignInForm';
import UserState from './context/users/UserState';





function App() {
  return (
    <>
    <UserState>
      <Navbar />
    <div className='background' > 
    <div className="clipPath"  >    
    
    <SignInForm />
    {/* <SignupForm /> */}
 

    </div>
    </div>

     
    </UserState>

  
    </>
  )
}

export default App;
