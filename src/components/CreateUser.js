import React, { useRef, useEffect, useState, useContext } from 'react';
// import React, { useState, useContext } from 'react'
import AppContext from '../context/appState/AppContext';
import { FormHeading } from './FormHeading';
import Input from './Input';
import InputMask from 'react-input-mask';
import UserForm from './Forms/UserForm';
import PlotForm from './Forms/PlotForm';
import InstallmentForm from './Forms/InstallmentForm';

const CreateUser=() => {





  const { onChangeGeneric }=useContext( AppContext );



  const [ formVal, setFormVal ]=useState( {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    CNIC: '',

    plotNo: '',
    plotPrice: '',
    block: '',
    lat: '',
    lng: '',
    area: '',
    category: '',

    plan: '',
    totalAmount: '',
    possessionAmount: '',
    installmentPerMonth: '',
    ballotAmount: '',
    bookingAmount: '',
    halfYearPayment: '',
    totalInstallmentCount: ''


  } )

  //*******  Proceed to next step
  const nextStep=() => {

    const { step }=formVal;
    setFormVal( { ...formVal, step: step+1 } )


  }


  //*******  Proceed to previous step
  const previousStep=() => {

    const { step }=formVal;

    setFormVal( { ...formVal, step: step-1 } )
  }


  // *******  on change fields event handler
  const onChange=onChangeGeneric( formVal, setFormVal );


  const { step }=formVal;

  const { firstName, lastName, email, CNIC, password, passwordConfirm }=formVal;
  const { plotNo, plotPrice, lat, lng, block, area, category }=formVal;
  const { plan, totalAmount, possessionAmount, installmentPerMonth, ballotAmount, bookingAmount, halfYearPayment, totalInstallmentCount }=formVal;

  const values1={ firstName, lastName, email, CNIC, password, passwordConfirm }
  const values2={ plotNo, plotPrice, lat, lng, block, area, category }
  const values3={ plan, totalAmount, possessionAmount, installmentPerMonth, ballotAmount, bookingAmount, halfYearPayment, totalInstallmentCount }

  switch ( step ) {
    case 1:
      return (
        <UserForm onChange={onChange} values={values1} nextStep={nextStep} />
      )
    case 2:
      return ( <PlotForm onChange={onChange} values={values2} nextStep={nextStep} previousStep={previousStep} setFormVal={setFormVal} formVal={formVal} /> )
    case 3:
      return ( <InstallmentForm onChange={onChange} values={values3} nextStep={nextStep} previousStep={previousStep} setFormVal={setFormVal} formVal={formVal} /> );


  }

}

export default CreateUser