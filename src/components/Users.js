import React, { useRef, useEffect, useState, useContext } from "react";
import AppContext from "../context/appState/AppContext";
import { FormHeading } from "./FormHeading";
// import Input from "./Input";
// import InputMask from "react-input-mask";
// import { FormDropdown } from "./FormDropdown";
import Api from "../Api";
import UsersContext from "../context/users/UsersContext";
import UserDataTable from "./UsersDataTable";
import EditUsersModal from "./EditUsersModal";

export default function Users() {
  const {  Cookies } = useContext(UsersContext);
  const [users, setUsers] = useState([]);
  const {showAlert} = useContext(AppContext)


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

  const getUsers = async () => {
    const cookie = Cookies.get("jwt");

    const res = await Api.get("users", {
      headers: { Authorization: `Bearer ${cookie}` },
    });
    setUsers(res.data.data.data);
  };


  const getAllDetails =  (e,id) => {
    if(e.target.classList.contains("show_table_btn")){
      const data= users.filter(el=>el.id===id)
      setDetails(data[0])
      setFormVal(data[0]);
    }
    
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
    const cookie = Cookies.get("jwt");
    try {
      const res = await Api.patch(
        `/users/${details._id}`,
        {
          firstName: formVal.firstName,
          lastName: formVal.lastName,
          CNIC: formVal.CNIC,
          email: formVal.email,
          password: formVal.password,
          passwordConfirm: formVal.passwordConfirm,
        },
        {
          headers: { Authorization: `Bearer ${cookie}` },
        }
      );
      if (res.data.status === "success") {
        setDetails(res.data.data);
        setDisableInputs(true);
        showAlert(`User has been update successfully!`, "success");
      }
      
    } catch (err) {      
      showAlert(`User not updated! Something went wrong`, "danger");
    }

    const USERS = users;
    
    const u= USERS.map((el)=>{
      if(el.id===details._id){
       return {
                ...formVal,
                firstName: formVal.firstName,
                lastName: formVal.lastName,
                CNIC: formVal.CNIC,
                email: formVal.email,
                password: formVal.password,
                passwordConfirm: formVal.passwordConfirm,

              }
      }
      else{
        return el;
      }
    })
    setUsers(u)
  
  };

  // const handleInstallmentUpdate = (e) => {
  //   e.preventDefault();
  // };

  useEffect(() => {
    getUsers();
   
  }, []);

  // *******  on change fields event handler
  const onChange = onChangeGeneric(formVal, setFormVal);
  return (
      (
      <>
      {details && <EditUsersModal details={details} handleEdit={handleEdit} disableInputs={disableInputs} handleUserUpdate={handleUserUpdate} setUsers={setUsers} users={users} onChange={onChange}/>}
      
        <FormHeading value="Users" />

        <UserDataTable users={users} key={JSON.stringify(users)} getAllDetails={getAllDetails} />
      </>
    )
  );
}
