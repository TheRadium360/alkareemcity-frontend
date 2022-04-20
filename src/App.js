import './css/index.css'
import React, { useContext } from 'react';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import SignInForm from './components/SignInForm';
import Welcome from './components/Welcome/Welcome'
import UserState from './context/users/UserState';
import AppState from './context/appState/AppState';
import ProtectedRoute from './components/ProtectedRoute';
import Sidenavbar from './components/Sidenavbar';
import Installments from './components/Installments'
import Notification from './components/Notification'
import CreateUser from './components/CreateUser';
import Alert from './components/Alert';
import Users from './components/Users';
import ApprovalRequest from './components/ApprovalRequest'; 
import FeedbackForm from './components/FeedbackForm'
import Feedbacks from './components/Feedbacks'
import "antd/dist/antd.css";


// import Flexes from './components/Flexes'
// import ComplaintForm from './components/ComplaintForm'
// import Approvalrequests from './components/Approvalrequests'
// import { Digitalpages } from './components/DigitalPages'

import {
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';
import Plot from './components/Plot';
import PayApprove from './components/PayApprove';
import Error from './components/Error';


function App() {




  return (
    <>
      <UserState>
        <AppState>





          <Routes>
            <Route exact path='/' element={<Welcome />} />

            <Route exact path="login" element={<SignInForm />} />
            <Route exact path="signup" element={<SignupForm />} />
            <Route exact path='error' element={<Error />} />
            {/* <Navbar /> */}


            {/**********  PARENT DASHBOARD ROUTE ********/}
            <Route exact path="dashboard" element={
              <ProtectedRoute role={[ 'admin', 'user' ]} redirectPath='/login'>
                <Sidenavbar />
              </ProtectedRoute>
            }
            >


              {/****************** ADMIN,USERS ROUTES  *****************/}
              <Route exact path="profile" element={
                <ProtectedRoute role={[ 'user' ]}> <Profile /></ProtectedRoute>
              } />

              {/* <Route exact path="" element={
                <ProtectedRoute role={['user' ]}> <Profile /></ProtectedRoute>
              } /> */}

              <Route exact path="" element={
                <ProtectedRoute role={[ 'admin' ]}> <Users /></ProtectedRoute>
              } />




              {/****************** USER ROUTES  *****************/}
              <Route exact path="plot" element={
                <ProtectedRoute role={[ 'user' ]}> <Plot /> </ProtectedRoute>
              } />

              <Route exact path="installments" role={[ 'user' ]} element={
                <ProtectedRoute role={[ 'user' ]}> <Installments /></ProtectedRoute>
              } />

              <Route exact path="approval" element={
                <ProtectedRoute role={[ 'user' ]}> <PayApprove /></ProtectedRoute>
              } />


              <Route exact path="feedbackform" element={
                <ProtectedRoute role={[ 'user' ]}> <FeedbackForm /></ProtectedRoute>
              } />






              {/****************** ADMIN ROUTES  *****************/}
              <Route exact path="notification" element={
                <ProtectedRoute role={[ 'admin' ]}><Notification /></ProtectedRoute>
              } />

              <Route exact path="createnewuser" element={
                <ProtectedRoute role={[ 'admin' ]}>  <CreateUser /></ProtectedRoute>
              } />

              <Route exact path="users" element={
                <ProtectedRoute role={[ 'admin' ]}>  <Users /> </ProtectedRoute>
              } />

              <Route exact path="approvalrequests" element={
                <ProtectedRoute role={[ 'admin' ]}> <ApprovalRequest /></ProtectedRoute>
              } /> 
              
              
              <Route exact path="feedbacks" element={
                <ProtectedRoute role={[ 'admin' ]}> <Feedbacks /></ProtectedRoute>
              } />
              
              

              



              {/* <Route exact path="flexes" element={<Flexes />} /> */}
              {/* <Route exact path="digitalpages" element={<Digitalpages />} /> */}
            </Route>



          </Routes>


          <Alert />

        </AppState>



      </UserState>


    </>
  )
}

export default App;
