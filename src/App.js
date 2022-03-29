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
import Feedback from './components/Feedback'
import Notification from './components/Notification'
import CreateUser from './components/CreateUser';
import Alert from './components/Alert';
import Users from './components/Users';
import ApprovalRequest from './components/ApprovalRequest'; 



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


function App() {




  return (
    <>
      <UserState>
        <AppState>
          <Routes>

            <Route exact path="login" element={<SignInForm />} />
            <Route exact path="signup" element={<SignupForm />} />
            <Route
              path="/"
              element={
                <ProtectedRoute redirectPath="/login" >
                  <Welcome />
                </ProtectedRoute>
              }
            />
            <Route exact path="dashboard" element={<Sidenavbar />}>
              <Route exact path="" element={<Profile />} />
              <Route exact path="profile" element={<Profile />} />
              {/* <Route exact path="complaints" element={<ComplaintForm />} /> */}
              <Route exact path="plot" element={<Plot />} />
              <Route exact path="installments" element={<Installments />} />
              <Route exact path="notification" element={<Notification />} />
              <Route exact path="feedback" element={<Feedback />} />
              <Route exact path="createnewuser" element={<CreateUser />} />
              <Route exact path="users" element={<Users />} />


              {/* <Route exact path="flexes" element={<Flexes />} /> */}
              {/* <Route exact path="digitalpages" element={<Digitalpages />} /> */}
              <Route exact path="approvalrequests" element={<ApprovalRequest />} />
            </Route>

            <Route exact path="approval" element={<PayApprove />} />
          </Routes>



          <Alert />
        </AppState>

        {/* <Navbar /> */}


      </UserState>


    </>
  )
}

export default App;
