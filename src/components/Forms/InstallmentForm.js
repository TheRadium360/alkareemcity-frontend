import React from 'react'
import Input from '../Input';
import { FormHeading } from '../FormHeading';
import { FormDropdown } from '../FormDropdown';


const InstallmentForm=( props ) => {
  const { values, onChange, nextStep, previousStep, formVal, setFormVal }=props;

  // plan: '',
  //   totalAmount: '',
  //     possessionAmount: '',
  //       installmentPerMonth: '',
  //         ballotAmount: '',
  //           bookingAmount: '',
  //             halfYearPayment: '',
  //               totalInstallmentCount: ''


  const moveToNext=( e ) => {
    e.preventDefault();
    nextStep();
  }

  const moveToBack=( e ) => {
    e.preventDefault();
    previousStep();
  }

  return (
    <div>

      <div className='my-5'>
        <FormHeading value="Installment Detail" />
      </div>

      <form>

        <div className="container" >
          <div className="row">



            <div className="col-6 mt-3 text-end">
              <FormDropdown name='plan' width='30%' backgroundColor='#bd960a' color='white' list={[ '3 Years', '4 Years', '5 Years' ]} onChange={onChange} formVal={formVal} setFormVal={setFormVal} defaultValue={values.plan} />
            </div>

            <div className="col-6  mt-3 ">
              <Input placeholder="Total amount" width="30%" name="totalAmount" label='r' type="number" onChange={onChange} defaultValue={values.totalAmount} labelVal="Total Installment Amount" />
            </div>

            <div className="col-6  mt-3 text-end">
              <Input placeholder="Possession amount" width="30%" name="possessionAmount" label='l' type="number" onChange={onChange} defaultValue={values.possessionAmount} labelVal="Possession rate" />
            </div>

            <div className="col-6  mt-3">
              <Input placeholder="Installment per month" width="30%" name="installmentPerMonth" label='r' type="number" onChange={onChange} defaultValue={values.installmentPerMonth} labelVal="Per Month Installment" />
            </div>

            <div className="col-6  mt-3 text-end">
              <Input placeholder="Ballot amount" width="30%" name="ballotAmount" label='l' type="number" onChange={onChange} defaultValue={values.ballotAmount} labelVal="Ballot Amount" />
            </div>

            <div className="col-6  mt-3 ">
              <Input placeholder="Booking amount" width="30%" name="bookingAmount" label='r' type="number" onChange={onChange} defaultValue={values.bookingAmount} labelVal="Booking Price" />
            </div>

            <div className="col-6  mt-3 text-end">
              <Input placeholder="Half year payment" width="30%" name="halfYearPayment" label='l' type="number" onChange={onChange} defaultValue={values.halfYearPayment} labelVal="Half Year Payment" />
            </div>

            <div className="col-6  mt-3 ">
              <Input placeholder="Total Iinstallment" width="30%" name="totalInstallmentCount" label='r' type="number" onChange={onChange} defaultValue={values.totalInstallmentCount} labelVal="Total Installments" />
            </div>

            <div className="col-12 text-center  mt-3">
              <Input placeholder="Total Iinstallment" width="30%" name="startDate" label='c' type="date" onChange={onChange} defaultValue={values.totalInstallmentCount} labelVal="Installment Start Date" />
            </div>



            {/* <div className='text-center container ' style={{ marginTop: "6rem", marginBottom: '2rem' }}> */}
            {/* <button className="btn reset_btn_outline btn-outline-dark mx-2" onClick={moveToBack}>Back</button> */}
            {/* <button className="btn form_btn me-4 mx-2" onClick={moveToNext} disabled={!values.plotNo||!values.plotPrice||!values.lat||!values.lng||!values.block||!values.area}>Next</button> */}
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

export default InstallmentForm