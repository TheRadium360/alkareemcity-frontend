import React, { Component } from 'react';
import '../css/Datatables.css';
import 'datatables.net-responsive';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.print';
import UsersContext from '../context/users/UsersContext';
import Confirmation from './Welcome/Confirmation';


const $=require('jquery');
$.DataTable=require('datatables.net-bs5');



export class DataTableComp extends Component {
    static contextType = UsersContext;


  constructor(){
    super();
    this.userTableData=[];

    
  }
  
  getAllUsers = async()=>{
   
    const users=this.props.users
    for (let i = 0; i < users.length; i++) {
      let user=[];
        user.push(i)
        user.push(users[i].CNIC)
        user.push(`${users[i].firstName} ${users[i].lastName}`)
        user.push(users[i].email)
        user.push(users[i].plotInformation[0].plotNo)
    

      user.push(`<button type="button" class="btn btn-sm btn-success  btn_id" data-bs-toggle="modal" data-bs-target="#exampleModal"  uid=${
        users[i].id
      } ${(onclick = (e) => {
        this.props.getAllDetails(e , e.target.getAttribute('uid'));
      })}>Edit</button>    






      <button type="button" class="btn btn-sm btn-danger btn_id" data-bs-toggle="modal" data-bs-target="#confirmation"  uid=${users[i].id}>Delete</button>
      `);
        
        this.userTableData.push(user)  
    } 
  }

  componentDidMount(){
    this.getAllUsers();
    this.$el=$(this.el);
    this.$el.DataTable({
    "dom": '<"dt-buttons"Bf><"clear">lirtp',
    "paging": true,
   
    "columnDefs": [
      { "orderable": false,"width": "10px", "targets": 0 },
      { "orderable": false,"width": "40px", "targets": 1 },
      { "orderable": false,"width": "40px", "targets": 2 },
      { "orderable": false,"width": "60px", "targets": 3 },
      { "orderable": false,"width": "15px", "targets": 4 },
      { "orderable": false,"width": "30px", "targets": 5 },
    ],
    "buttons": [
      'csvHtml5',
      'excelHtml5',
      'print'
    ]
    , 
  "data": this.userTableData
  ,
  
  
})
}
 


  

  render() {
    return (
      <>
      <Confirmation handleClick={this.props.deleteUser} />

        {!this.props.users? <div className='text-center'> <div className="spinner-grow" style={{ width: "4rem", height: '4rem', marginTop: "10rem" }} role="status">

        </div><div className="" style={{ fontSize: "12px" }}>Loading...</div></div>:




          <div className="show_table">
            <table className="table table-striped table-bordered display  table-dark inner_table" cellSpacing="0" width="100%" ref={el => this.el=el}>

              <thead>
                <tr>
                  <th className="headings px-3">No.</th>
                  <th className="headings px-3">CNIC</th>
                  <th className="headings px-3">Name</th>
                  <th className="headings px-3">Email</th>
                  <th className="headings px-3">Plot#</th>
                  <th className="headings px-3 ">Update</th>
                </tr>


              </thead>

            </table>

          </div>

        }





      </>

    
    )
  }
}



export default DataTableComp



      
