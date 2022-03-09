import './css/index.css'
import React from 'react';
import './css/index.css'
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import SignInForm from './components/SignInForm';
import Welcome from './components/Welcome'
import UserState from './context/users/UserState';
import AppState from './context/appState/AppState';
import ProtectedRoute from './components/ProtectedRoute';
import ComplaintForm from './components/complaintForm/ComplaintForm';


import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <AppState>

        <UserState>

          {/* <Navbar /> */}
          <Routes>

            <Route exact path="login" element={<SignInForm />} />
            <Route exact path="signup" element={<SignupForm />} />
            <Route exact path="complaintform" element={<ComplaintForm />} />


            <Route
              exact path="/"
              element={
                <ProtectedRoute redirectPath="/signup" >
                  <Welcome />
                </ProtectedRoute>
              }

            />

          </Routes>

        </UserState>

      </AppState>

    </>
  )
}

export default App;
