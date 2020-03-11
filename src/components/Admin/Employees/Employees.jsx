import React, { Fragment, useState } from "react";
import CreateEmployee from "./CreateEmployee";
import { connect } from "react-redux";
import UpdateEmployee from "./UpdateEmployee";

const Employees = ({ isAuthenticated, token }) => {
  const [createEmployeeForm, toggleCreateEmployee] = useState("hidden");
  const [updateEmployeeForm, toggleUpdateForm] = useState("hidden");

  const showForm = () => {
    if (createEmployeeForm === "hidden") {
      toggleCreateEmployee("");
    } else toggleCreateEmployee("hidden");
  };

  const showUpdateForm = () => {
    if (updateEmployeeForm === "hidden") {
      toggleUpdateForm("");
    } else toggleUpdateForm("hidden");
  };

  return (
    <Fragment>
      <div className="p-3">
        <button
          className="bg-transparent hover:bg-pink-400 hover:text-gray-200 border p-2 rounded-full mx-3"
          onClick={showForm}
        >
          Create Employee
        </button>
        <button
          className="bg-transparent hover:bg-pink-400 hover:text-gray-200 border p-2 rounded-full mx-3"
          onClick={showUpdateForm}
        >
          Update Employee
        </button>
        <button className="bg-transparent hover:bg-pink-400 hover:text-gray-200 border p-2 rounded-full mx-3">
          Assign Territory
        </button>
      </div>
      <div
        className={`${createEmployeeForm} pl-3 w-2/3 h-auto`}
        id="create-employee-form"
      >
        <CreateEmployee />
      </div>
      <div className={`${updateEmployeeForm} pl-3 w-2/3 h-auto`}>
        <p className="p-2 m-1 text-xl">Search for employees</p>
        <UpdateEmployee />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  token: state.authReducer.token
});

export default connect(mapStateToProps)(Employees);
