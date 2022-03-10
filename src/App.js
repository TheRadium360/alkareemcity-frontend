import './css/index.css'
import React from 'react';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import SignInForm from './components/SignInForm';
import Welcome from './components/Welcome'
import UserState from './context/users/UserState';
import ProtectedRoute from './components/ProtectedRoute';
import Sidenavbar from './components/Sidenavbar';
import Installments from './components/Installments'
import Flexes from './components/Flexes'
import Complaints from './components/Complaints'
import Approvalrequests from './components/Approvalrequests'
import  {Digitalpages}  from './components/DigitalPages'
import {
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
      <UserState>

        {/* <Navbar /> */}
        <Routes>

          <Route exact path="login" element={<SignInForm />} />
          <Route exact path="signup" element={<SignupForm />} />
          <Route
            path="/"
            element={
              <ProtectedRoute redirectPath="/signup" >
                <Welcome />
              </ProtectedRoute>
            }
          />
          <Route exact path="/dashboard" element={<Sidenavbar />}>
            <Route exact path="" element={<Installments />} />
            <Route exact path="installments" element={<Installments />} />
            <Route exact path="complaints" element={<Complaints />} />
            <Route exact path="flexes" element={<Flexes />} />
            <Route exact path="digitalpages" element={<Digitalpages />} />
            <Route exact path="approvalrequests" element={<Approvalrequests />} />
          </Route>
        </Routes>



      </UserState>

    </>
  )
}

export default App;
