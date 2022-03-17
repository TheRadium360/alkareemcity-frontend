import React, { useEffect, useRef } from 'react'
import Input from '../Input';
import { FormHeading } from '../FormHeading';
import { FormDropdown } from '../FormDropdown';


const PlotForm=( props ) => {

  const { values, onChange, nextStep, previousStep, formVal, setFormVal }=props;

  const moveToNext=( e ) => {
    e.preventDefault();
    nextStep();
  }

  const moveToBack=( e ) => {
    e.preventDefault();
    previousStep();
  }

  const formRef=useRef( null )

  const residentialPlotArea=[ '3 Marla', '5 Marla', '7 Marla', '10 Marla', '18 Marla', '1 Kanal' ];
  const residentialBlocks=[ 'Abu Bakar Block', 'Usman Block', 'Umer Block', 'Ali Block' ]

  const commercialPlotArea=[ '2 Marla', '4 Marla', '5 Marla' ];
  const commercialBlocks=[ 'Broad Way Block', 'High Way Block', 'Park Square Block', 'Omer Block' ];

  // const cat=values.category;
  useEffect( () => {

    setFormVal( { ...formVal, block: '', plotArea: '', plotNo: '', plotPrice: '', lat: '', lng: '' } )
    // formRef.current.reset();

  }, [ values.plotType ] )



  return (
    <div>

      <div className='my-5'>
        <FormHeading value="Plot Details" subHeading="Select the plot catgeory and then fill out the information" />
      </div>

      <form ref={formRef}>

        <div className="container" >
          <div className="row">


            <div className="col-12 mt-3 text-center">
              <FormDropdown name='plotType' width='40%' backgroundColor='#bd960a' color='white' list={[ 'Commercial', 'Residential' ]} onChange={onChange} formVal={formVal} setFormVal={setFormVal} formRef={formRef} defaultValue={values.plotType} />
            </div>


            <div className="col-6 mt-3 text-end">
              <FormDropdown name='block' width='30%' backgroundColor='#bd960a' color='white' list={values.category==='commercial'? commercialBlocks:residentialBlocks} onChange={onChange} formVal={formVal} setFormVal={setFormVal} defaultValue={values.block} />
            </div>

            <div className="col-6 mt-3 ">
              <FormDropdown name='plotArea' width='30%' backgroundColor='#bd960a' color='white' list={values.category==='commercial'? commercialPlotArea:residentialPlotArea} onChange={onChange} formVal={formVal} setFormVal={setFormVal} defaultValue={values.plotArea} />
            </div>

            <div className="col-6 text-end mt-3">
              <Input placeholder="Enter plot no" width="30%" label='l' name="plotNo" type="number" onChange={onChange} margin="" defaultValue={values.plotNo} labelVal="Plot No" />
            </div>


            <div className="col-6  mt-3">
              <Input placeholder="Enter plotPrice" width="30%" label='r' name="plotPrice" type="number" onChange={onChange} margin="" defaultValue={values.plotPrice} labelVal="Plot Price" />
            </div>



            <div className="col-6 text-end mt-3">
              <Input placeholder="Enter plot latitude" width="30%" label='l' name="lat" type="number" onChange={onChange} defaultValue={values.lat} labelVal="Latitude(Cordinates)" />
            </div>

            <div className="col-6  mt-3">
              <Input placeholder="Enter plot longitude" width="30%" label='r' name="lng" type="number" onChange={onChange} defaultValue={values.lng} labelVal="Longitude(Cordinates)" />
            </div>




            {/* <div className='text-center container my-3' style={{ marginTop: "6rem", marginBottom: '2rem' }}> */}
            {/* <button className="btn form_btn me-4 mx-2" onClick={moveToNext} >Next</button> */}
            {/* </div> */}

            <div className='text-center mt-5 container'>


              <div className="col-12 text-center">
                <button className="btn reset_btn_outline btn-outline-dark mx-2" onClick={moveToBack}>Back</button>
                <button type='submit' className="btn form_btn" >Submit</button>
              </div>


              <div className="col-12 text-end mb-3">
                {/* <button className="btn form_btn me-4 mx-2" onClick={moveToNext} disabled={!values.plotNo||!values.plotPrice||!values.lat||!values.lng||!values.block||!values.area}>Next</button> */}
                <button className="btn form_next_btn " onClick={moveToNext}> next <span className='right_arrow'>&#8594;</span></button>

              </div>

            </div>


          </div>


        </div>



      </form>
    </div>

  )

}

export default PlotForm