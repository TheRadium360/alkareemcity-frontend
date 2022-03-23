import React from 'react'
import { FormHeading } from '../FormHeading'

class Success extends React.Component {



  render() {

    const moveToBack=( e ) => {
      e.preventDefault();
      this.props.previousStep();
    }

    return (
      <>


        <div className="container">
          <FormHeading value="User Details" />
          <div className="row my-3">

            <div className="col-6">
              <p>Name:</p>
            </div>

            <div className="col-6">
              <p> {this.props.values.firstName+" "+this.props.values.lastName}</p>
            </div>

            <div className="col-6">
              <p>CNIC:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.CNIC}</p>
            </div>

            <div className="col-6">
              <p>Email:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.email}</p>
            </div>

            <div className="col-6">
              <p>Password:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.password}</p>
            </div>


          </div>


          <hr className='mb-5' />

          <FormHeading value="Plot Details" />
          <div className="row my-3">
            <div className="col-6">
              <p>Block:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.block}</p>
            </div>

            <div className="col-6">
              <p>Plot No:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.plotNo}</p>
            </div>

            <div className="col-6">
              <p>Plot Price:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.plotPrice}</p>
            </div>

            <div className="col-6">
              <p>Plot Area:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.plotArea}</p>
            </div>

          </div>

          <hr className='mb-5' />

          <FormHeading value="Installment Details" />

          <div className="row my-3">

            <div className="col-6">
              <p>Plan:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.plan}</p>
            </div>

            <div className="col-6">
              <p>Booking Amount:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.bookingAmount}</p>
            </div>

            <div className="col-6">
              <p>Balloting Amount:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.ballotAmount}</p>
            </div>

            <div className="col-6">
              <p>Installment Per Month:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.installmentPerMonth}</p>
            </div>

            <div className="col-6">
              <p>Half Year Payment:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.halfYearPayment}</p>
            </div>

            <div className="col-6">
              <p>Half Year Payment:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.halfYearPayment}</p>
            </div>

            <div className="col-6">
              <p>Plan Start From:</p>
            </div>

            <div className="col-6">
              <p>{this.props.values.planStartDate}</p>
            </div>





          </div>


        </div>





        <div className='text-center my-4 container'>

          <button className="btn reset_btn_outline btn-outline-dark mx-2" onClick={moveToBack}>Back</button>


        </div>

      </>
    )

  }
}


export default Success