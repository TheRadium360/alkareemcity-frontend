import React from 'react';
import '../App.css';

const FormScrollBar = () => {
    return (
        <>
        <div className='row'>
            <div className='col-3'>
                <div className='text'>
                   <div className='form_scrollbar'>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    <div  className='scrollbar_value'> Lorem Ipsum </div>
                    </div>
                    </div>
            </div>

            <div className='col-8'>

              {/* <section className='timeline'> */}
                {/* <div className='timeline'> timeline </div> */}
              {/* </section> */}

                <div className='detail_heading'>Form Name</div>

          {/* -------Checkboxes-----------       */}

  <div className="form-check detail_checkbox">
  <input className="form-check-input chekbox_inputs" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label " htmlFor="flexCheckDefault" > Direct
  </label>
</div>
  <div className="form-check detail_checkbox1">
  <input className="form-check-input chekbox_inputs" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label " htmlFor="flexCheckDefault" > Through Dealer
  </label>
</div>

{/* -------------inputs---------------- */}

<div className='input_handle'>
    <div className='form_date'><input type="text" id="fname" name="fname" placeholder='Date' className='formall_inputs'/></div>
<div className='form_so'><input type="text" id="fname" name="fname" placeholder='SO/DO' className='formall_inputs'/></div>

<div className='form_cnic'><input type="text" id="fname" name="fname" placeholder='CNIC NO' className='formall_inputs'/></div>
<div className='form_contact'><input type="text" id="fname" name="fname" placeholder='Contact No' className='formall_inputs'/></div>
</div>

    {/* -------Checkboxes-----------       */}

    <div className="form-check detail_checkbox">
  <input className="form-check-input chekbox_inputs" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label " htmlFor="flexCheckDefault" > Plot
  </label>
</div>

  <div className="form-check detail_checkbox1">
  <input className="form-check-input chekbox_inputs" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label " htmlFor="flexCheckDefault" > Under Construction
  </label>
</div>

  <div className="form-check detail_checkbox2">
  <input className="form-check-input chekbox_inputs" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label " htmlFor="flexCheckDefault" > House/Building
  </label>
</div>

  <div className="form-check detail_checkbox3">
  <input className="form-check-input chekbox_inputs" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label " htmlFor="flexCheckDefault" > Allocation File
  </label>
</div>

{/* -------------subject input----------------- */}

<div className='form_subject'>
    <div className='subject_label'><label >Subject:</label></div>
<div className='handlesubject_input'><input type="text" id="fname" name="fname" className='subject_input' /></div> </div>



{/* -------------------Type of transfer------------ */}

<div className='transfer'>Type of Transfer</div>

{/* --------------checkboxs------------------ */}

<div className="form-check detail_checkbox">
  <input className="form-check-input chekbox_inputs" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label " htmlFor="flexCheckDefault" > Regular
  </label>
</div>

<div className="form-check detail_checkbox4">
  <input className="form-check-input chekbox_inputs" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label " htmlFor="flexCheckDefault" >Hiba     
</label>
<div class="text-muted">( Father/Mother/Wife/Son/Daughter )</div>
</div>


</div>
            </div>
        </>
    );
};

export default FormScrollBar;