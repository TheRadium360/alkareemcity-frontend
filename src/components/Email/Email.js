import React, { useState, useContext ,useRef} from 'react';
import emailjs from '@emailjs/browser';
import AppContext from '../../context/appState/AppContext'
import Input from '../Generic/Input'
import TextArea from '../Generic/TextArea'
import { FormHeading } from '../Generic/FormHeading'
import Api from '../../Api'
import UsersContext from '../../context/users/UsersContext'


export const Email = () => {




  const [ notify, setNotify ]=useState( {  subject: "", description: "" } )
  const { onChangeGeneric,showAlert }=useContext( AppContext );
  const { Cookies, user }=useContext( UsersContext )

  const onChange=onChangeGeneric( notify, setNotify  );
  
  const formRef=useRef(null);




  const sendEmail =async (e) => {
    e.preventDefault();
    const cookie=Cookies.get( 'jwt' );

    const res=await Api.get( '/users',{
      headers: { Authorization: `Bearer ${cookie}` }
    } )

    try{
        
        console.log(res.data.data.data)


        if ( res.data.status==="success" ) {
            formRef.current.reset()
            const users=res.data.data.data;
            users.forEach(async (el) => {
              await emailjs.send('service_p9rrs2h', 'template_cb57emq', {
                    user_name: `${el.firstName+' ' +el.lastName}`,
                    message:`${notify.description}`,
                    subject:`${notify.subject}`,
                    user_email: `${el.email}`,
                }, 'qsFD0uJPurY7jkf6e' )
                
                
            });
            
            showAlert( `Notification sent to all users successfully!`, "success" );
        }
        else
        throw new Error();
    }
    catch(e){
        showAlert( `Something went wrong!`, "danger" );
    }


  };

  return (

    <div style={{ margin: "2rem 10rem" }}>
    <div className='mt-5 mb-2'>
      <FormHeading value="Notification" subHeading="Send notification to all users" />
    </div>



    <form ref={formRef} onSubmit={sendEmail}>

      <div className="container" >
        <div className="row">


          <div className="col-12">
              <Input placeholder="Subject" labelVal={"Subject"} width="100%" name="subject" type="text" onChange={onChange} />
          </div>

          <div className="col-12">
            <TextArea placeholder="Description" width="100%" name="description" rows={12} onChange={onChange} />
          </div>

          <div className='text-center'>
            <button type="submit" className="btn form_btn me-4">Submit</button>
            <button type="reset" className="btn reset_btn">Reset</button>
          </div>

        </div>


      </div>



    </form>
  </div>

  );
};