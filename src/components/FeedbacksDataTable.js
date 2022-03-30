import React, { Component } from "react";
import "../css/Datatables.css";
import "datatables.net-responsive";
import "datatables.net-buttons-bs4";
import "datatables.net-buttons/js/buttons.colVis";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.flash";
import "datatables.net-buttons/js/buttons.print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const $ = require("jquery");
$.DataTable = require("datatables.net-bs5");

export class DataTableComp extends Component {
  constructor() {
    super();
    this.feedbackTableData = [];
  }

  getAllFeedbacks = async () => {
    const feedbacks = this.props.feedbacks;
    for (let i = 0; i < feedbacks.length; i++) {
      let feedback = [];
      feedback.push(i);
      feedback.push(feedbacks[i].name);
      feedback.push(feedbacks[i].email);
      feedback.push(feedbacks[i].subject);
      feedback.push(feedbacks[i].description);
      feedback.push(`<h6><span class="badge bg-danger" fid=${feedbacks[i].id}  style=cursor:pointer;>
      Remove
    </span></h6>`)
      this.feedbackTableData.push(feedback);
    }
  };

  componentDidMount() {
    this.getAllFeedbacks();
    this.$el = $(this.el);
    this.$el.DataTable({
      dom: '<"dt-buttons"Bf><"clear">lirtp',
      paging: true,

      columnDefs: [
        { orderable: false, width: "1px", targets: 0 },
        { orderable: false, width: "10px", targets: 1 },
        { orderable: false, width: "7px", targets: 2 },
        { orderable: false, width: "30px", targets: 3 },
        { orderable: false, width: "35px", targets: 4 },
        { orderable: false, width: "10px", targets: 5 },
      ],
      buttons: [],
      data: this.feedbackTableData,
    });
  }

  render() {
    return (
      <div className="show_table">
        <div
          style={{
            position: "absolute",
            left: "80rem",
            top: "10rem",
            cursor: "pointer",
          }}
        >
          {console.log(this.props.feedbacks)}
          <span class="badge bg-danger" onClick={()=>this.props.deleteAllFeedbacks()}>
            Delete all <FontAwesomeIcon icon={faTrashCan} color="white" />
          </span>
        </div>

        <table
          className="table table-striped table-bordered display  table-dark inner_table"
          cellSpacing="0"
          width="100%"
          ref={(el) => (this.el = el)}
        >
          <thead>
            <tr>
              <th className="headings px-2">No.</th>
              <th className="headings px-2">Name</th>
              <th className="headings px-2">Email</th>
              <th className="headings px-2">Subject</th>
              <th className="headings px-2 ">Description</th>
              <th className="headings px-2 ">Action</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default DataTableComp;
