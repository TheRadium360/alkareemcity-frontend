import './css/index.css'
import React, { Component } from 'react';
import './css/index.css'
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import SignInForm from './components/SignInForm';
import Welcome from './components/Welcome'
import UserState from './context/users/UserState';
import ProtectedRoute from './components/ProtectedRoute';
import {
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
      <UserState>

        <Navbar />
        <Routes>

          <Route path="login" element={<SignInForm />} />
          <Route path="signup" element={<SignupForm />} />

          <Route
            path="/"
            element={
              <ProtectedRoute redirectPath="/signup" >
                <Welcome />
              </ProtectedRoute>
            }
          />

        </Routes>






     
    </UserState>


    </>
  )
}

export default App;
