import React, { useRef, useEffect, useState, useContext } from "react";
import AppContext from "../context/appState/AppContext";
import { FormHeading } from "./FormHeading";
import Input from "./Input";
import InputMask from "react-input-mask";
import { FormDropdown } from "./FormDropdown";
import Api from "../Api";
import UsersContext from "../context/users/UsersContext";
import UserDataTable from './UsersDataTable'





export default function Users() {
  const { user , Cookies } = useContext(UsersContext);
  const { showAlert }=useContext( AppContext );
  const [users, setUsers] = useState([]);

  const { onChangeGeneric } = useContext(AppContext);
  const [details, setDetails] = useState({});
  const [disableInputs, setDisableInputs] = useState(true);
  const [formVal, setFormVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    CNIC: "",
    userId: "",

    plotNo: "",
    plotPrice: "",
    block: "",
    lat: "",
    lng: "",
    plotArea: "",
    plotType: "",

    plan: "",
    totalAmount: "",
    possessionAmount: "",
    installmentPerMonth: "",
    ballotAmount: "",
    bookingAmount: "",
    halfYearPayment: "",
    totalInstallmentCount: "",
  });

  // const cnicRef = useRef();




  const getUsers = async ()=>{

    const cookie = Cookies.get('jwt')

    const res= await Api.get("users",
    {
      headers: { Authorization: `Bearer ${cookie}` }
    })
    const users = res.data.data.data;
    setUsers(users)

  }



  const getAllDetails = async () => {
    const res = await Api.get(`/users/${user.id}`);
    setDetails(res.data.data);
    setFormVal(details)
  };



  const handleEdit = () => {
    if (disableInputs === true) {
      setDisableInputs(false);
    } else if (disableInputs === false) {
      setDisableInputs(true);
    }
  };



  const handleUserUpdate = async (e) => {
    e.preventDefault();
    const cookie = Cookies.get('jwt')
    const res = await Api.patch(`/users/${user.id}`, {
      "firstName": formVal.firstName,
      "lastName": formVal.lastName,
      "CNIC": formVal.CNIC,
      "email" : formVal.email,
      "password": formVal.password,
      "passwordConfirm": formVal.passwordConfirm
    },
    {
      headers: { Authorization: `Bearer ${cookie}` }
    });
    if(res.data.status === "success"){

      setDetails(res.data.data)
      setDisableInputs(true)
      console.log(res.data.status)
      showAlert( `User has been update successfully!`, "success" );
    }else{
      showAlert( `User not updated! Something went wrong`, "danger" );

    }
     
  };

  const handleInstallmentUpdate =(e)=>{
    e.preventDefault();

  }




  useEffect(() => {
    getUsers()
     getAllDetails();
    // details && setFormVal( { ...formVal, CNIC: details.CNIC } )
  }, []);



  // *******  on change fields event handler
  const onChange = onChangeGeneric(formVal, setFormVal);
  


   
    
    
    
    return details && (
      <>
              <FormHeading value="Users" />


      {users.length!=0 &&<UserDataTable users={users}/>}
      {/* {console.log(users)} */}
      <div>
        <FormHeading value="User Details" />
        <div className="w-25 ms-auto">
          <button className=" btn btn-success" onClick={handleEdit}>
            edit
          </button>
        </div>
      </div>
      <form onSubmit={handleUserUpdate}>
        <div className="container">
          <div className="row">
            <div className="col-6 text-end">
              {/* <InputMask
                mask="99999-9999999-9"
                maskChar={null}
                type="text"
                id="inputCnic"
                placeholder="Enter CNIC"
                autoComplete="off"
                className="input"
                onChange={onChange}
                name="CNIC"
                style={{ width: "60%" }}
                disabled={disableInputs}
                // defaultValue= {details.CNIC}
                ref={cnicRef}
              /> */}
               <Input
                placeholder="Enter CNIC"
                defaultValue={details.CNIC}
                width="60%"
                name="CNIC"
                type="text"
                onChange={onChange}
                disabled={disableInputs}
                />

              <p className="input_label_l" style={{ width: "60%" }}>
                CNIC
              </p>
            </div>

            <div className="col-6 inputBox">
              <Input
                placeholder="Enter email"
                defaultValue={details.email}
                width="60%"
                name="email"
                type="email"
                onChange={onChange}
                disabled={disableInputs}
                />
              <p className="input_label_l">Email</p>
            </div>

            <div className="col-6 text-end inputBox ">
              <Input
                placeholder="Enter firstname"
                defaultValue={details.firstName}
                width="60%"
                name="firstName"
                type="text"
                onChange={onChange}
                disabled={disableInputs}
              />
              <p className="input_label_l" style={{ width: "60%" }}>
                First name
              </p>
            </div>
            <div className="col-6">
              <Input
                placeholder="Enter lastname"
                defaultValue={details.lastName}
                width="60%"
                name="lastName"
                type="text"
                onChange={onChange}
                disabled={disableInputs}
              />
              <p className="input_label_l">Last name</p>
            </div>

            <div className="col-6 text-end mt-3">
              <Input
                placeholder="Enter Password"
                width="60%"
                name="password"
                type="password"
                onChange={onChange}
                disabled={disableInputs}
                required={false}
              />
              <p className="input_label_l" style={{ width: "60%" }}>
                Password
              </p>
            </div>

            <div className="col-6  mt-3">
              <Input
                placeholder="Confirm Password"
                width="60%"
                name="passwordConfirm"
                type="password"
                onChange={onChange}
                disabled={disableInputs}
                required={false}
              />
              <p className="input_label_l">Confirm Password</p>
            </div>

            <div className="text-center mt-2 container">
              <div className="col-12 text-center">
                <button
                  type="submit"
                  
                  className="btn form_btn"
                  disabled={disableInputs}

                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <br />
      <br />

      <div className="">
        <FormHeading value="Plot Details" />
        <div className="w-25 ms-auto">
          <button
            className=" btn btn-success"
            disabled={true}
            onClick={handleEdit}
          >
            edit
          </button>
        </div>
      </div>

      <form>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <FormDropdown
                name="plotType"
                width="60%"
                backgroundColor="#bd960a"
                color="white"
                onChange={onChange}
                list={["Commercial", "Residential"]}
                disabled={true}
                defaultValue={
                  details.plotInformation && details.plotInformation[0].plotType
                }
              />
            </div>

            <div className="col-6 mt-2 text-end">
              <FormDropdown
                name="block"
                width="60%"
                backgroundColor="#bd960a"
                color="white"
                list={["Commercial", "Residential"]}
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.plotInformation && details.plotInformation[0].block
                }
              />
            </div>

            <div className="col-6  mt-2">
              <FormDropdown
                name="plotArea"
                width="60%"
                backgroundColor="#bd960a"
                color="white"
                list={["Commercial", "Residential"]}
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.plotInformation && details.plotInformation[0].plotArea
                }
              />
            </div>

            <div className="col-6 text-end mt-3">
              <Input
                placeholder="Enter plot no"
                width="60%"
                name="plotNo"
                type="text"
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.plotInformation && details.plotInformation[0].plotNo
                }
                label="l"
                labelVal="Plot Number"
              />
            </div>

            <div className="col-6  mt-3">
              <Input
                placeholder="Enter plotPrice"
                width="60%"
                name="plotPrice"
                type="number"
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.plotInformation &&
                  details.plotInformation[0].plotPrice
                }
                label="r"
                labelVal="Plot Price"
              />
            </div>

            <div className="col-6 text-end ">
              <Input
                placeholder="Enter plot latitude"
                width="60%"
                name="lat"
                type="number"
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.plotInformation && details.plotInformation[0].lat
                }
                label="l"
                labelVal="Latitude(Cordinates)"
              />
            </div>

            <div className="col-6  ">
              <Input
                placeholder="Enter plot longitude"
                width="60%"
                name="lng"
                type="number"
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.plotInformation && details.plotInformation[0].lng
                }
                label="r"
                labelVal="Longitude(Cordinates)"
              />
            </div>

            <div className="text-center mt-2 container">
              <div className="col-12 text-center">
                <button type="submit" disabled={true} className="btn form_btn">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <br />
      <br />
      <div>
        <FormHeading value="Installment Details" />
        <div className="w-25 ms-auto">
          <button className=" btn btn-success" onClick={handleEdit}>
            edit
          </button>
        </div>
      </div>

      <form onSubmit={handleInstallmentUpdate}>
        <div className="container">
          <div className="row">
            <div className="col-6 mt-4 text-end">
              <FormDropdown
                name="plan"
                width="60%"
                backgroundColor="#bd960a"
                color="white"
                list={["3 Years", "4 Years", "5 Years"]}
                onChange={onChange}
                defaultValue={`${
                  details.installmentPlan &&
                  details.installmentPlan[0].totalInstallmentCount / 12
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
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.installmentPlan &&
                  details.installmentPlan[0].totalAmount
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
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.installmentPlan &&
                  details.installmentPlan[0].possesionAmount
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
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.installmentPlan &&
                  details.installmentPlan[0].installmentPerMonth
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
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.installmentPlan &&
                  details.installmentPlan[0].ballotAmount
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
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.installmentPlan &&
                  details.installmentPlan[0].bookingAmount
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
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.installmentPlan &&
                  details.installmentPlan[0].halfYearPayment
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
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.installmentPlan &&
                  details.installmentPlan[0].totalInstallmentCount
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
                onChange={onChange}
                disabled={true}
                defaultValue={
                  details.installmentPlan &&
                  details.installmentPlan[0].remainingBalance
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
                onChange={onChange}
                disabled={disableInputs}
                defaultValue={
                  details.installmentPlan &&
                  new Date(details.installmentPlan[0].dueDate)
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
                  disabled={disableInputs}
                  className="btn form_btn"  
                  
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <br />
      <br />
    </>
  );
}
