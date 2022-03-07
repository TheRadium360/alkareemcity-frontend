import './index.css'
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
 

    </div>
    </div>

     
    </UserState>
    </>
  )
}

export default App;
