// import './welcome.css'
import './index.css'
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import SignInForm from './components/SignInForm';
// import Welcome from './components/Welcome';
import Residential from './components/Residential';
import FormNav from './components/FormName/FormNav';
import FormScrollBar from './components/FormName/FormScrollBar';
import FormName from './components/FormName/FormName';
import Checkbox from './components/Checkbox';
import Input from './components/Input';
import Residential2 from './components/Residential2';
import Footer from './components/Footer';
import Welcome from './components/Welcome/Welcome';
import FormName1 from './components/FormName1/FormName1';





function App() {
  return (
    <>
      <Navbar />
    <div className='background' > 
    <div className="clipPath"  >    
    <SignupForm />
    {/* <SignInForm/> */}
    {/* <Welcome/> */}

    </div>
    </div>

     
     {/* <FormNav/> */}
     {/* <FormScrollBar/> */}
  
    <FormName/>  
    <Welcome/>
    <Residential/>
    <Footer/>
    <FormName1/>
    <Residential2/>

     {/* <Checkbox name={"Digital pages"}/> */}
     {/* <Input placeholder={"Date"}/> */}
    </>
  )
}

export default App;
