import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  state = {
    columnDefs: this.createColumnDefs(),
    rowData: this.createRowData()
  };

  createColumnDefs() {
    return [
      { headerName: "ID", field: "id" },
      { headerName: "Name", field: "name" },
      { headerName: "Age", field: "age" },
      { headerName: "Gender", field: "gender" },
      { headerName: "Email", field: "email" },
      { headerName: "PhoneNumber", field: "phoneNo" }
    ];
  }

  createRowData() {
    return this.props.employees;
  }

  render() {
    return (
      <div>
        {this.props.userLoggedIn ? (
          <div style={{ height: "300px", width: "1200px" }} className="ag-theme-balham">
            <h1 className="text-primary lead">Employees List</h1>
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
              pagination={true}
              groupSelectsChildren={true}
              debug={true}></AgGridReact>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

Dashboard.propTypes = {
  employees: PropTypes.array.isRequired,
  userLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  userLoggedIn: state.userLoggedIn,
  employees: state.employees
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
