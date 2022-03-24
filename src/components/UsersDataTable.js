import React, { Component } from 'react';
import '../css/Datatables.css';
import 'datatables.net-responsive';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.print';
import UsersContext from '../context/users/UsersContext';


const $=require('jquery');
$.DataTable=require('datatables.net-bs5');



export class DataTableComp extends Component {
    static contextType = UsersContext;


  constructor(){
    super();
    this.userTableData=[];

  }

  getAllUsers = async()=>{
    // const cookie = this.context.Cookies.get('jwt')

    //   const res= await Api.get("users",
    //   {
    //     headers: { Authorization: `Bearer ${cookie}` }
    //   })
    //   const users = res.data.data.data;
    const users= this.props.users
    // console.log(users)
    for (let i = 0; i < users.length; i++) {
        let user=[];
        user.push(i)
        user.push(users[i].CNIC)
        user.push(`${users[i].firstName} ${users[i].lastName}`)
        user.push(users[i].email)
        user.push(users[i].plotInformation[0].plotNo)
        user.push(`<button type="button" class="btn btn-sm btn-dark show_table_btn">Update</button>`)

        this.userTableData.push(user)  
        // console.log(this.userTableData)
    }
  }
  

  componentDidMount(){

    console.log(this.props.users)
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
      // 'copyHtml5',
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
<div className="show_table">  
  <table  className="table table-striped table-bordered display  table-dark inner_table"  cellSpacing="0" width="100%" ref={el=> this.el=el}>
  
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

    
    )
  }
}



export default DataTableComp



      
