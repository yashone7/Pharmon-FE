import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../redux/actions/authAction";
import { Redirect } from "react-router-dom";
import decoder from "jwt-decode";

const Login = ({ login, isAuthenticated, token, history }) => {
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
    console.log(employee);
    if (employee.user.role === "admin") {
      return <Redirect to="/admin" />;
    }
    if (employee.user.role === "representative") {
      return <Redirect to="/representative" />;
    }
  }

  return (
    <Fragment>
      <div className="w-full max-w-sm shadow-md rounded p-5 m-3 align-middle h-auto">
        <form onSubmit={e => onSubmit(e)}>
          <div className="field self-center">
            <label className="label" htmlFor="phone">
              Phone Number
            </label>
            <div className="control">
              <input
                type="text"
                pattern="[0-9]*"
                id="phone"
                placeholder="Enter phone number"
                name="emp_phone"
                required
                value={emp_phone}
                onChange={e => handleLogin(e)}
                className="input"
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="password">
              Password
            </label>
            <div className="control">
              <input
                type="password"
                placeholder="Enter password"
                name="emp_password"
                id="password"
                value={emp_password}
                required
                onChange={e => handleLogin(e)}
                className="input"
              />
            </div>
          </div>
          <button type="submit" className="button is-primary">
            Login
          </button>
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

export default connect(mapStateToProps, { login })(Login);
