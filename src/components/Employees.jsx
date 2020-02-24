import React, { Fragment, Component } from "react";

class Employees extends Component {
  state = {
    isFormToggled: "hidden",
    isButtonActive: "",
    emp_name: "",
    emp_password: "",
    emp_password2: "",
    emp_phone: "",
    emp_role: "",
    doPasswordsMatch: ""
  };
  showForm = () => {
    if (this.state.isFormToggled === "hidden") {
      this.setState({
        ...this.state,
        isFormToggled: "",
        isButtonActive: "hidden"
      });
    }
    if (this.state.isFormToggled === "") {
      this.setState({
        ...this.state,
        isFormToggled: "hidden",
        isButtonActive: ""
      });
    }
  };

  handleEmployeeForm = e => {
    e.preventDefault();
    if (this.state.emp_password !== this.state.emp_password2) {
      console.log("passwords do not match");
      this.setState({ ...this.state, doPasswordsMatch: "is-danger" });
    } else this.setState({ ...this.state, doPasswordsMatch: "is-success" });
    console.log(this.state);
  };

  createEmployee = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className="block md:inline-flex">
          <div className="rounded shadow-md">
            <button
              className={`p-10 bg-blue-700 ${this.state.isButtonActive} hover:bg-blue-500 rounded`}
              onClick={this.showForm}
            >
              <h1>
                <span className="text-gray-200 text-xl text-center ml-2 p-1 mb-2">
                  Create a new employee
                </span>
              </h1>
            </button>
            <div
              className={`rounded ${this.state.isFormToggled} w-auto h-auto`}
            >
              <button
                className="m-2 p-2 bg-teal-500 text-gray-200 rounded"
                onClick={this.showForm}
              >
                Back
              </button>
              <p className="mt-2 mb-2 ml-2 text-lg">Enter employee details</p>
              <form
                className="p-2 mr-2"
                onSubmit={e => this.handleEmployeeForm(e)}
              >
                <label className="label ml-2" htmlFor="Name">
                  Name
                </label>
                <input
                  className="input ml-2 mb-2"
                  type="text"
                  name="emp_name"
                  value={this.state.emp_name}
                  id="Name"
                  required
                  placeholder="Name"
                  onChange={e => this.createEmployee(e)}
                />
                <label className="label ml-2" htmlFor="Phone">
                  Phone Number
                </label>
                <input
                  className="input ml-2 mb-2"
                  type="text"
                  name="emp_phone"
                  value={this.state.emp_phone}
                  id="Phone"
                  required
                  placeholder="Phone number"
                  onChange={e => this.createEmployee(e)}
                />
                <label className="label ml-2" htmlFor="Password">
                  Password
                </label>
                <input
                  className={`input ml-2 mb-2 ${this.state.doPasswordsMatch}`}
                  type="password"
                  name="emp_password"
                  value={this.state.emp_password}
                  id="Password"
                  placeholder="use default value as password"
                  onChange={e => this.createEmployee(e)}
                />
                <label className="label ml-2" htmlFor="Password2">
                  Confirm Password
                </label>
                <input
                  className={`input ml-2 mb-2 ${this.state.doPasswordsMatch}`}
                  type="password"
                  name="emp_password2"
                  value={this.state.emp_password2}
                  id="Password2"
                  placeholder="Confirm password"
                  onChange={e => this.createEmployee(e)}
                />
                <span className="ml-2 mr-4 font-semibold">Role</span>
                <label htmlFor="admin">Admin</label>
                <input
                  className="ml-2 mr-2"
                  type="radio"
                  name="emp_role"
                  value="admin"
                  id="admin"
                  onChange={e => this.createEmployee(e)}
                />
                <label htmlFor="representative">Representative</label>
                <input
                  className="ml-2 mr-2"
                  type="radio"
                  name="emp_role"
                  value="representative"
                  id="representative"
                  onChange={e => this.createEmployee(e)}
                />
                <button
                  type="submit"
                  value="submit"
                  className="button is-primary ml-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Employees;
