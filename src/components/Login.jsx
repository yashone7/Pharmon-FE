import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, loadUser } from "../redux/actions/authAction";
import { Redirect } from "react-router-dom";
import decoder from "jwt-decode";

const Login = ({ login, isAuthenticated, token }) => {
  const [formData, handleFormData] = useState({
    emp_phone: "",
    emp_password: ""
  });

  const { emp_password, emp_phone } = formData;

  const onSubmit = async e => {
    e.preventDefault();
    login(emp_phone, emp_password);
  };

  const handleLogin = e => {
    handleFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isAuthenticated) {
    const employee = decoder(token);
    if (employee.user.role) {
      return <Redirect to="/admin" />;
    } else {
      return <Redirect to="/representative" />;
    }
  }

  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-12">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={e => onSubmit(e)}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="emp_phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="emp_phone"
              placeholder="Phone"
              name="emp_phone"
              required
              value={emp_phone}
              onChange={e => handleLogin(e)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              placeholder="Password"
              name="emp_password"
              required
              value={emp_password}
              onChange={e => handleLogin(e)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              value="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline is-primary"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  token: state.authReducer.token
});

export default connect(mapStateToProps, { login, loadUser })(Login);
