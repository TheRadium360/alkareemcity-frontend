import React, { useEffect, useRef, useContext } from 'react'
import Input from '../Input';
import { FormHeading } from '../FormHeading';
import { FormDropdown } from '../FormDropdown';
import Api from '../../Api';
import UsersContext from '../../context/users/UsersContext';
import AppContext from '../../context/appState/AppContext';


const PlotForm=( props ) => {

  const { values, onChange, nextStep, previousStep, formVal, setFormVal, setPlotFormStatus, plotFormStatus }=props;

  const { showAlert, setAlert }=useContext( AppContext );
  const { Cookies }=useContext( UsersContext );

  const moveToNext=( e ) => {
    e.preventDefault();
    nextStep();
  }

  const moveToBack=( e ) => {
    e.preventDefault();
    previousStep();
  }

  const handlePlotFormSubmit=async ( e ) => {
    e.preventDefault();


    const cookie=Cookies.get( 'jwt' );

    const data={
      plotNo: values.plotNo,
      plotType: values.plotType,
      plotPrice: values.plotPrice,
      block: values.block,
      plotArea: values.plotArea,
      lat: values.lat,
      lng: values.lng,
      user: formVal.userId
    };


    try {

      let res;
      if ( !formVal.plotId ) {
        res=await Api.post( 'plots',
          data,
          {
            // withCredentials: true,
            headers: { Authorization: `Bearer ${cookie}` }
          }
        )

      } else {

        res=await Api.patch( `plots/${formVal.plotId}`,
          data,
          {
            // withCredentials: true,
            headers: { Authorization: `Bearer ${cookie}` }
          }
        )
      }

      console.log( res );
      console.log( res.data.status );
      if ( res.data.status==="success" ) {

        showAlert( `Plot has been ${formVal.plotId? 'updated':'created'} for the user successfully!`, "success" );
        setPlotFormStatus( res.data.status );
        setFormVal( { ...formVal, plotId: res.data.data.id } )

      }





    } catch ( error ) {

      console.log( error );
      showAlert( "Something went wrong! Please try again later", "danger" );
    }
  }

  const formRef=useRef( null )

  const residentialPlotArea=[ '3 Marla', '5 Marla', '7 Marla', '10 Marla', '18 Marla', '1 Kanal' ];
  const residentialBlocks=[ 'Abu Bakar Block', 'Usman Block', 'Umer Block', 'Ali Block' ]

  const commercialPlotArea=[ '2 Marla', '4 Marla', '5 Marla' ];
  const commercialBlocks=[ 'Broad Way Block', 'High Way Block', 'Park Square Block', 'Omer Block' ];

  // const cat=values.category;
  useEffect( () => {

    // setFormVal( { ...formVal, block: '', plotArea: '', plotNo: '', plotPrice: '', lat: '', lng: '' } )
    // formRef.current.reset();

  }, [ values.plotType ] )



  return (
    <div>

      <div className='mb-2'>
        <FormHeading value="Plot Details" subHeading="Select the plot catgeory and then fill out the information" />
      </div>

      <form ref={formRef} onSubmit={handlePlotFormSubmit}>

        <div className="container" >
          <div className="row">


            <div className="col-12 text-center">
              <FormDropdown name='plotType' width='60%' backgroundColor='#bd960a' color='white' list={[ 'Commercial', 'Residential' ]} onChange={onChange} formVal={formVal} setFormVal={setFormVal} formRef={formRef} defaultValue={values.plotType} />
            </div>


            <div className="col-6 mt-2 text-end">
              <FormDropdown name='block' width='60%' backgroundColor='#bd960a' color='white' list={values.category==='commercial'? commercialBlocks:residentialBlocks} onChange={onChange} formVal={formVal} setFormVal={setFormVal} defaultValue={values.block} />
            </div>

            <div className="col-6  mt-2">
              <FormDropdown name='plotArea' width='60%' backgroundColor='#bd960a' color='white' list={values.category==='commercial'? commercialPlotArea:residentialPlotArea} onChange={onChange} formVal={formVal} setFormVal={setFormVal} defaultValue={values.plotArea} />
            </div>

            <div className="col-6 text-end mt-3">
              <Input placeholder="Enter plot no" width="60%" label='l' name="plotNo" type="text" onChange={onChange} margin="" defaultValue={values.plotNo} labelVal="Plot No" />
            </div>


            <div className="col-6  mt-3">
              <Input placeholder="Enter plotPrice" width="60%" label='r' name="plotPrice" type="number" onChange={onChange} margin="" defaultValue={values.plotPrice} labelVal="Plot Price" step="any" />
            </div>



            <div className="col-6 text-end ">
              <Input placeholder="Enter plot latitude" width="60%" label='l' name="lat" type="number" onChange={onChange} defaultValue={values.lat} labelVal="Latitude(Cordinates)" step="any" />
            </div>

            <div className="col-6  ">
              <Input placeholder="Enter plot longitude" width="60%" label='r' name="lng" type="number" onChange={onChange} defaultValue={values.lng} labelVal="Longitude(Cordinates)" step="any" />
            </div>




            {/* <div className='text-center container my-3' style={{ marginTop: "6rem", marginBottom: '2rem' }}> */}
            {/* <button className="btn form_btn me-4 mx-2" onClick={moveToNext} >Next</button> */}
            {/* </div> */}

            <div className='text-center mt-2 container'>
              {console.log( !values.plotNo||!values.plotPrice||!values.lat||!values.lng||!values.block||!values.area )}

              <div className="col-12 text-center">
                <button className="btn reset_btn_outline btn-outline-dark mx-2" onClick={moveToBack}>Back</button>
                <button type='submit' className="btn form_btn" disabled={!values.plotNo||!values.plotPrice||!values.lat||!values.lng||!values.block||!values.plotArea}>{formVal.plotId? 'Update':'Submit'}</button>
              </div>


              <div className="col-12 text-end mb-3">
                {/* <button className="btn form_btn me-4 mx-2" onClick={moveToNext} >Next</button> */}
                <button className="btn form_next_btn " disabled={plotFormStatus==='fail'? true:false} onClick={moveToNext}> next <span className='right_arrow'>&#8594;</span></button>

              </div>

            </div>


          </div>


        </div>



      </form>
    </div>

  )

}

export default PlotForm