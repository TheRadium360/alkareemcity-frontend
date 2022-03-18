import React from 'react'
import { useState } from 'react';
import Api from './../Api'
import { useEffect } from 'react';
import{ FormHeading} from './FormHeading'
// import PlotMap from './PlotMap'
import PlotInfo from './PlotInfo';

export default function Plot() {
 
  return (
    <div className='container mt-4'>

      <PlotInfo/>
      <FormHeading value='Plot location'/>
      {/* <PlotMap/> */}
      {/* <PlotInfo  info="ok" heading="Plot Area : " plotNo="Plot#: 35-e" /> */}
     
    </div>
  )
}
