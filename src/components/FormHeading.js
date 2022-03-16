import '../css/FormHeading.css';
import React, { Component } from 'react';

export const FormHeading = (props) => {
  return(
    <>
   <div className="headingBox">
   <h1 className="formHeading">
  {props.value}
  </h1>
      </div>

      {props.subHeading? <p className='text-center sub_head'>{props.subHeading}</p>
        :''} 

  </>
  );
}
