import React, { Component } from 'react';
import '../css/Datatables.css';
import 'datatables.net-responsive';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.print';

const $=require('jquery');
$.DataTable=require('datatables.net-bs5');


export class DataTableComp extends Component {
 
 componentDidMount(){
console.log(this.el);
this.$el=$(this.el);
this.$el.DataTable({
    "dom": '<"dt-buttons"Bf><"clear">lirtp',
    "paging": true,
    "pageLength": 12,
    "autoWidth": false, 
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": false ,
    "columnDefs": [
      { "width": "20px", "targets": 0 },
      { "width": "40px", "targets": 1 },
      { "width": "40px", "targets": 2 },
      { "width": "40px", "targets": 3 },
      { "width": "40px", "targets": 4 },
      { "width": "40px", "targets": 5 },
      { "width": "40px", "targets": 6 },
      { "width": "40px", "targets": 7 }
    ],
    "buttons": [
      'copyHtml5',
      'csvHtml5',
      'excelHtml5',
      'print'
    ]
    , 
  "data": [
     [
        1,
        25000,
        250000,
        350000,
        500,
        800000,
        650000,
        `<button class='btn-primary px-2 ms-3'>Pay</button>`,
  ],
     [
        1,
        25000,
        250000,
        350000,
        500,
        800000,
        650000,
        `Approved`,
  ],
     [
        0,
        25000,
        250000,
        350000,
        500,
        800000,
        650000,
        `Fail`,
  ],
     [
        1,
        25000,
        250000,
        350000,
        500,
        800000,
        650000,
        `Approved`,
  ],
    ]
  ,
  
  
})
 }
 componentWillUnmount(){
   
 }
 
  render() {
    return (
 <div className="show_table">
  
  <table  className="table table-striped table-bordered display  table-dark inner_table"  cellspacing="0" width="100%" ref={el=> this.el=el}>
  
  <thead>
      <tr>
        <th class="headings px-3">Count</th>
        <th class="headings px-3">Booking</th>
        <th class="headings px-3">Installment</th>
        <th class="headings px-3">Balloting</th>
        <th class="headings px-3">Fine</th>
        <th class="headings px-3">Possession</th>
        <th class="headings px-3 ">Total</th>
        <th class="headings px-3 ">Status</th>
  
      </tr>
    </thead>
 
  </table>

</div>

    
    )
  }
}



export default DataTableComp



      
