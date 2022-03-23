import React, { useRef } from 'react'
import { FormHeading } from "./FormHeading";
import './../css/flex.css'
import './../css/ReuestApproval.css';
import Input from './Input';
import InputMask from 'react-input-mask';
import $ from 'jquery';
import { useEffect } from 'react';


const Flexes=() => {

  const submitBtnRef=useRef( null )
  const formRef=useRef( null )
  const handleClose=() => {
    formRef.current.reset()
    const btnOuter=$( ".button_outer" );
    $( "#uploaded_view" ).removeClass( "show" );
    $( "#uploaded_view" ).find( "img" ).remove();
    btnOuter.removeClass( "file_uploading" );
    btnOuter.removeClass( "file_uploaded" );
    btnOuter.css( { 'position': '', 'left': '' } )
  }


  const handleOnchange=() => {
    // console.log( btnRef.current )
    // btnRef.current.classList.add( 'file_uploaded' )
    // console.log( btnRef.current.classList )
    // console.log( btnRef.current.classList.contains( 'file_uploading' ) )
    // if ( btnRef.current.classList.contains( 'file_uploading' ) ) {
    //   btnRef.current.style.display='none';
    // }
    console.log( submitBtnRef.current )
  }



  const uploadFlex=() => {


    const btnUpload=$( "#upload_file" ),
      btnOuter=$( ".button_outer" );
    btnUpload.on( "change", function ( e ) {
      const ext=btnUpload.val().split( '.' ).pop().toLowerCase();
      if ( $.inArray( ext, [ 'gif', 'png', 'jpg', 'jpeg' ] )==-1 ) {
        $( ".error_msg" ).text( "Not an Image..." );
      } else {
        $( ".error_msg" ).text( "" );
        btnOuter.addClass( "file_uploading" );
        setTimeout( function () {
          btnOuter.addClass( "file_uploaded" );
          btnOuter.css( 'position', 'absolute' )
          btnOuter.css( 'left', '-999999999rem' )
        }, 3000 );
        const uploadedFile=URL.createObjectURL( e.target.files[ 0 ] );
        setTimeout( function () {
          $( "#uploaded_view" ).append( '<img src="'+uploadedFile+'" />' ).addClass( "show" );
        }, 3500 );
      }
    } );
    $( ".file_remove" ).on( "click", function ( e ) {
      $( "#uploaded_view" ).removeClass( "show" );
      $( "#uploaded_view" ).find( "img" ).remove();
      btnOuter.removeClass( "file_uploading" );
      btnOuter.removeClass( "file_uploaded" );
      btnOuter.css( { 'position': '', 'left': '' } )


    } );
  }



  useEffect( () => {
    uploadFlex()
  }, [] );
  return (

    <>

      <div>
        {/*Button trigger modal*/}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        {/*Modal */}
        <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Send Approval Request</h5>

                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose} />
              </div>
              <div className="modal-body">

                <form ref={formRef}>

                  <div className="container-fluid">

                    <div className="row">

                      <div className="col-6 text-end mt-3">

                        <InputMask mask="99999-9999999-9" maskChar={null} type="text" id="inputCnic" placeholder='Enter CNIC' className='input' autoComplete="off" name="CNIC" style={{ width: "100%" }} required />
                        <p className="input_label_l" style={{ width: "100%" }}>CNIC</p>

                      </div>



                      <div className="col-6 inputBox mt-3">
                        <Input placeholder="Enter email" width="100%" name="email" type="email" margin="" label='r' labelVal="Email Address" />

                      </div>

                      <div className="col-6 text-end inputBox mt-3">
                        <Input placeholder="Enter firstname" width="100%" name="firstName" type="text" margin="" label='l' labelVal="First Name" />
                      </div>

                      <div className="col-6 mt-3">
                        <Input placeholder="Enter lastname" width="100%" name="lastName" type="text" label='r' labelVal="Last Name" />
                      </div>


                      <div className="col-12">
                        <div className="panel">
                          <div className="button_outer">
                            {/* <form> */}
                            <div className="btn_upload">
                              <input type="file" id="upload_file" name="" onChange={handleOnchange} />
                              Upload Transaction Image
                            </div>
                            <div className="processing_bar"></div>

                            <button className="success_box btn" ref={submitBtnRef}>Submit</button>
                            {/* </form> */}
                          </div>
                        </div>
                        <div className="error_msg"></div>
                        <div className="uploaded_file_view" id="uploaded_view">
                          <span className="file_remove">X</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </form>
              </div>


              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                <button type="button" className="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Flexes;


