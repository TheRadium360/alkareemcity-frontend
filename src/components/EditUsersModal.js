import React from 'react'
import Input from './Input'
import { FormDropdown } from './FormDropdown'
import { FormHeading } from './FormHeading'

export default function (props) {
  return (
    <div>
        <div
          className="modal fade "
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold" id="exampleModalLabel">
                  User Details
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
               { <div className="modal-body">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        User
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body text-center">
                        <FormHeading value="User Details" />

                        <div className="w-25 ms-auto">
                          <button
                            className=" btn btn-success"
                            onClick={props.handleEdit}
                          >
                            edit
                          </button>
                        </div>

                        <form onSubmit={props.handleUserUpdate}>
                          <div className="container">
                            <div className="row">
                              <div className="col-6 text-end">
                              
                                <Input
                                  placeholder="Enter CNIC"
                                  defaultValue={props.details.CNIC}
                                  width="100%"
                                  name="CNIC"
                                  type="text"
                                  onChange={props.onChange}
                                  disabled={props.disableInputs}
                                />

                                <p
                                  className="input_label_l"
                                  style={{ width: "100%" }}
                                >
                                  CNIC
                                </p>
                              </div>

                              <div className="col-6 inputBox">
                                <Input
                                  placeholder="Enter email"
                                  defaultValue={props.details.email}
                                  width="100%"
                                  name="email"
                                  type="email"
                                  onChange={props.onChange}
                                  disabled={props.disableInputs}
                                />
                                <p className="input_label_l">Email</p>
                              </div>

                              <div className="col-6 text-end inputBox ">
                                <Input
                                  placeholder="Enter firstname"
                                  defaultValue={props.details.firstName}
                                  width="100%"
                                  name="firstName"
                                  type="text"
                                  onChange={props.onChange}
                                  disabled={props.disableInputs}
                                />
                                <p
                                  className="input_label_l"
                                  style={{ width: "100%" }}
                                >
                                  First name
                                </p>
                              </div>
                              <div className="col-6">
                                <Input
                                  placeholder="Enter lastname"
                                  defaultValue={props.details.lastName}
                                  width="100%"
                                  name="lastName"
                                  type="text"
                                  onChange={props.onChange}
                                  disabled={props.disableInputs}
                                />
                                <p className="input_label_l">Last name</p>
                              </div>

                              <div className="col-6 text-end mt-3">
                                <Input
                                  placeholder="Enter Password"
                                  width="100%"
                                  name="password"
                                  type="password"
                                  onChange={props.onChange}
                                  disabled={props.disableInputs}
                                  required={false}
                                />
                                <p
                                  className="input_label_l"
                                  style={{ width: "100%" }}
                                >
                                  Password
                                </p>
                              </div>

                              <div className="col-6  mt-3">
                                <Input
                                  placeholder="Confirm Password"
                                  width="100%"
                                  name="passwordConfirm"
                                  type="password"
                                  onChange={props.onChange}
                                  disabled={props.disableInputs}
                                  required={false}
                                />
                                <p className="input_label_l">
                                  Confirm Password
                                </p>
                              </div>

                              <div className="text-center mt-2 container">
                                <div className="col-12 text-center">
                                  <button
                                    type="submit"
                                    className="btn form_btn"
                                    disabled={props.disableInputs}
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Plot
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div class="accordion-body">
                        <FormHeading value="Plot Details" />
                        <div className="w-25 ms-auto">
                          <button
                            className=" btn btn-success"
                            disabled={true}
                            onClick={props.handleEdit}
                          >
                            edit
                          </button>
                        </div>

                        <form>
                          <div className="container">
                            <div className="row">
                              <div className="col-12 text-center">
                                <FormDropdown
                                  name="plotType"
                                  width="100%"
                                  backgroundColor="#bd960a"
                                  color="white"
                                  onChange={props.onChange}
                                  list={["Commercial", "Residential"]}
                                  disabled={true}
                                  defaultValue={
                                    props.details.plotInformation &&
                                    props.details.plotInformation[0].plotType
                                  }
                                />
                              </div>

                              <div className="col-6 mt-2 text-end">
                                <FormDropdown
                                  name="block"
                                  width="100%"
                                  backgroundColor="#bd960a"
                                  color="white"
                                  list={["Commercial", "Residential"]}
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.plotInformation &&
                                    props.details.plotInformation[0].block
                                  }
                                />
                              </div>

                              <div className="col-6  mt-2">
                                <FormDropdown
                                  name="plotArea"
                                  width="100%"
                                  backgroundColor="#bd960a"
                                  color="white"
                                  list={["Commercial", "Residential"]}
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.plotInformation &&
                                    props.details.plotInformation[0].plotArea
                                  }
                                />
                              </div>

                              <div className="col-6 text-end mt-3">
                                <Input
                                  placeholder="Enter plot no"
                                  width="100%"
                                  name="plotNo"
                                  type="text"
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.plotInformation &&
                                    props.details.plotInformation[0].plotNo
                                  }
                                  label="l"
                                  labelVal="Plot Number"
                                />
                              </div>

                              <div className="col-6  mt-3">
                                <Input
                                  placeholder="Enter plotPrice"
                                  width="100%"
                                  name="plotPrice"
                                  type="number"
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.plotInformation &&
                                    props.details.plotInformation[0].plotPrice
                                  }
                                  label="r"
                                  labelVal="Plot Price"
                                />
                              </div>

                              <div className="col-6 text-end ">
                                <Input
                                  placeholder="Enter plot latitude"
                                  width="100%"
                                  name="lat"
                                  type="number"
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.plotInformation &&
                                    props.details.plotInformation[0].lat
                                  }
                                  label="l"
                                  labelVal="Latitude(Cordinates)"
                                />
                              </div>

                              <div className="col-6  ">
                                <Input
                                  placeholder="Enter plot longitude"
                                  width="100%"
                                  name="lng"
                                  type="number"
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.plotInformation &&
                                    props.details.plotInformation[0].lng
                                  }
                                  label="r"
                                  labelVal="Longitude(Cordinates)"
                                />
                              </div>

                              <div className="text-center mt-2 container">
                                <div className="col-12 text-center">
                                  <button
                                    type="submit"
                                    disabled={true}
                                    className="btn form_btn"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Installment
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div>
                          <FormHeading value="Installment Details" />
                          <div className="w-25 ms-auto">
                            <button
                              className=" btn btn-success"
                              onClick={props.handleEdit}
                            >
                              edit
                            </button>
                          </div>
                        </div>

                        <form>
                          <div className="container">
                            <div className="row">
                              <div className="col-6 mt-4 text-end">
                                <FormDropdown
                                  name="plan"
                                  width="60%"
                                  backgroundColor="#bd960a"
                                  color="white"
                                  list={["3 Years", "4 Years", "5 Years"]}
                                  onChange={props.onChange}
                                  defaultValue={`${
                                    props.details.installmentPlan &&
                                    props.details.installmentPlan[0]
                                      .totalInstallmentCount / 12
                                  } years`}
                                  disabled={true}
                                />
                              </div>

                              <div className="col-6  mt-3 ">
                                <Input
                                  placeholder="Total amount"
                                  width="60%"
                                  name="totalAmount"
                                  type="number"
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.installmentPlan &&
                                    props.details.installmentPlan[0].totalAmount
                                  }
                                  label="r"
                                  labelVal="Total Installment Amount"
                                />
                              </div>

                              <div className="col-6  text-end">
                                <Input
                                  placeholder="Possession amount"
                                  width="60%"
                                  name="possessionAmount"
                                  type="number"
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.installmentPlan &&
                                    props.details.installmentPlan[0].possesionAmount
                                  }
                                  label="l"
                                  labelVal="Possession rate"
                                />
                              </div>

                              <div className="col-6  ">
                                <Input
                                  placeholder="Installment per month"
                                  width="60%"
                                  name="installmentPerMonth"
                                  type="number"
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.installmentPlan &&
                                    props.details.installmentPlan[0]
                                      .installmentPerMonth
                                  }
                                  label="r"
                                  labelVal="Per Month Installment"
                                />
                              </div>

                              <div className="col-6   text-end">
                                <Input
                                  placeholder="Ballot amount"
                                  width="60%"
                                  name="ballotAmount"
                                  type="number"
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.installmentPlan &&
                                    props.details.installmentPlan[0].ballotAmount
                                  }
                                  label="l"
                                  labelVal="Ballot Amount"
                                />
                              </div>

                              <div className="col-6   ">
                                <Input
                                  placeholder="Booking amount"
                                  width="60%"
                                  name="bookingAmount"
                                  type="number"
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.installmentPlan &&
                                    props.details.installmentPlan[0].bookingAmount
                                  }
                                  label="r"
                                  labelVal="Booking Price"
                                />
                              </div>

                              <div className="col-6   text-end">
                                <Input
                                  placeholder="Half year payment"
                                  width="60%"
                                  name="halfYearPayment"
                                  type="number"
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.installmentPlan &&
                                    props.details.installmentPlan[0].halfYearPayment
                                  }
                                  label="l"
                                  labelVal="Half Year Payment"
                                />
                              </div>

                              <div className="col-6   ">
                                <Input
                                  placeholder="Total installment"
                                  width="60%"
                                  name="totalInstallmentCount"
                                  type="number"
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.installmentPlan &&
                                    props.details.installmentPlan[0]
                                      .totalInstallmentCount
                                  }
                                  label="r"
                                  labelVal="Total Installments"
                                />
                              </div>

                              <div className="col-6 text-end  ">
                                <Input
                                  placeholder="Remaining installment amount"
                                  width="60%"
                                  name="remainAmount"
                                  type="number"
                                  onChange={props.onChange}
                                  disabled={true}
                                  defaultValue={
                                    props.details.installmentPlan &&
                                    props.details.installmentPlan[0].remainingBalance
                                  }
                                  label="l"
                                  labelVal="Remaining installment amount"
                                />
                              </div>

                              <div className="col-6  ">
                                <Input
                                  placeholder="Total installment"
                                  width="60%"
                                  name="startDate"
                                  type="date"
                                  onChange={props.onChange}
                                  disabled={props.disableInputs}
                                  defaultValue={
                                    props.details.installmentPlan &&
                                    new Date(props.details.installmentPlan[0].dueDate)
                                      .toISOString()
                                      .split("T")[0]
                                  }
                                  label="r"
                                  labelVal="Installment Start Date"
                                />
                              </div>

                              <div className="text-center mt-5 container">
                                <div className="col-12 text-center">
                                  <button
                                    type="submit"
                                    disabled={props.disableInputs}
                                    className="btn form_btn"
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            </div>
          </div>
        </div> 

    </div>
  )
}
