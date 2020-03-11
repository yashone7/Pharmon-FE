import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { updateEmployee } from "../../../redux/actions/employeesAction";

const UpdateForm = props => {
  const { sortedEmployees } = props.location.state;
  const { params } = props.match;
  const { updateEmployee } = props;

  const [updateFormData, handleUpdateForm] = useState({
    emp_name: sortedEmployees.emp_name,
    emp_phone: sortedEmployees.emp_phone,
    emp_role: sortedEmployees.emp_role
  });
  const { emp_name, emp_phone, emp_role } = updateFormData;

  const handleEmployeeForm = e => {
    handleUpdateForm({ ...updateFormData, [e.target.name]: e.target.value });
  };

  const handleUpdateEmployee = e => {
    e.preventDefault();
    updateEmployee({ emp_name, emp_phone, emp_role }, params.id);
  };

  return (
    <Fragment>
      <form className="w-full">
        <label className="label ml-2" htmlFor="Name">
          Name
        </label>
        <input
          className="input ml-2 mb-2"
          type="text"
          name="emp_name"
          value={emp_name}
          id="Name"
          required
          placeholder="Name"
          onChange={e => handleEmployeeForm(e)}
        />
        <label className="label ml-2" htmlFor="Phone">
          Phone Number
        </label>
        <input
          className="input ml-2 mb-2"
          type="text"
          pattern="[0-9]*"
          name="emp_phone"
          value={emp_phone}
          id="Phone"
          required
          placeholder="Phone number"
          onChange={e => handleEmployeeForm(e)}
        />
        <span className="ml-2 mr-4 font-semibold">Role</span>
        <label htmlFor="admin">Admin</label>
        <input
          className="ml-2 mr-2"
          type="radio"
          name="emp_role"
          value="admin"
          checked={emp_role === "admin"}
          id="admin"
          onChange={e => handleEmployeeForm(e)}
        />
        <label htmlFor="representative">Representative</label>
        <input
          className="ml-2 mr-2"
          type="radio"
          name="emp_role"
          value="representative"
          checked={emp_role === "representative"}
          id="representative"
          onChange={e => handleEmployeeForm(e)}
        />
        <button
          onClick={e => handleUpdateEmployee(e)}
          className="button is-primary ml-2"
        >
          Update
        </button>
      </form>
    </Fragment>
  );
};

export default connect(null, { updateEmployee })(UpdateForm);
