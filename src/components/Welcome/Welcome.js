import '../../css/welcome.css';

import React from 'react';
import Welcome1 from './Welcom';
import Navbar from '../Navbar';

const Welcome = () => {
    return (
        <div>
                  <Navbar/>
    <div className='welcome_background' > 
    <div className="welcome_clipPath"  >    
    {/* <SignupForm /> */}
    {/* <SignInForm/> */}
    <Welcome1/>

    </div>
    </div>

        </div>
    );
};

export default Welcome;