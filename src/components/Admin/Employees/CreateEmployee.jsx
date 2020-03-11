import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../../redux/actions/alertAction";
import { createEmployee } from "../../../redux/actions/employeesAction";

const CreateEmployee = ({ setAlert, createEmployee }) => {
  const [formData, handleFormData] = useState({
    emp_name: "",
    emp_phone: "",
    emp_password: "",
    emp_password2: "",
    emp_role: ""
  });

  const [doPasswordsMatch, triggerStatus] = useState("");

  const {
    emp_name,
    emp_role,
    emp_phone,
    emp_password,
    emp_password2
  } = formData;

  const handleCreateEmployee = e => {
    handleFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmployeeForm = async e => {
    e.preventDefault();
    if (emp_password !== emp_password2) {
      setAlert("passwords do not match", "danger");
      triggerStatus("is-danger");
    } else {
      triggerStatus("is-success");
      createEmployee({ emp_name, emp_phone, emp_password, emp_role });
    }
  };

  return (
    <Fragment>
      <form className="w-full" onSubmit={e => handleEmployeeForm(e)}>
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
          onChange={e => handleCreateEmployee(e)}
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
          onChange={e => handleCreateEmployee(e)}
        />
        <label className="label ml-2" htmlFor="Password">
          Password
        </label>
        <input
          className={`input ml-2 mb-2 ${doPasswordsMatch}`}
          type="password"
          name="emp_password"
          value={emp_password}
          id="Password"
          placeholder="use default value as password"
          onChange={e => handleCreateEmployee(e)}
        />
        <label className="label ml-2" htmlFor="Password2">
          Confirm Password
        </label>
        <input
          className={`input ml-2 mb-2 ${doPasswordsMatch}`}
          type="password"
          name="emp_password2"
          value={emp_password2}
          id="Password2"
          placeholder="Confirm password"
          onChange={e => handleCreateEmployee(e)}
        />
        <span className="ml-2 mr-4 font-semibold">Role</span>
        <label htmlFor="admin">Admin</label>
        <input
          className="ml-2 mr-2"
          type="radio"
          name="emp_role"
          value="admin"
          id="admin"
          onChange={e => handleCreateEmployee(e)}
        />
        <label htmlFor="representative">Representative</label>
        <input
          className="ml-2 mr-2"
          type="radio"
          name="emp_role"
          value="representative"
          id="representative"
          onChange={e => handleCreateEmployee(e)}
        />
        <button type="submit" value="submit" className="button is-primary ml-2">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

// const mapStateToProps = state => ({
//   employees: state.employeeReducer.employees,
// });

export default connect(null, {
  createEmployee,
  setAlert
})(CreateEmployee);
