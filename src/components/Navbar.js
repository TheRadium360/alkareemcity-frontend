import React from 'react';
import './App.css';

const Navbar = () => {
    return (
        <div className='container '>
  <div className='row'>
      <div className='col-2 logo'><img src='https://www.alkareemcity.com/wp-content/uploads/2022/01/Untitled-design-3.png' alt='Al-Kareem'
 height='140px' /></div>
        <div className='col-10'> <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid ">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li className="nav-item">

    <a className="nav-link text-light" href='#'  >Home</a>
    </li>
    
        <li className="nav-item">
          <a className="nav-link text-light"  href='#'>Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light"  href='#'>Gallery</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-light"  href='#'>About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-light"  href='#'>Contact</a>
        </li>
      </ul>
      

      <div className="btn btn-dark nav_button">My Account</div>


    </div>
  </div>
</nav>
  </div>
  </div>
        </div>
    );
};

export default Navbar;