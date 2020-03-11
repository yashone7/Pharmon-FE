import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import decoder from "jwt-decode";

const Landing = ({ isAuthenticated, token }) => {
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
      <h1>Landing page</h1>
      <Link to="/login">
        <button className="button is-primary">go to console</button>
      </Link>
    </Fragment>
  );
};

const mapStatetoProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  token: state.authReducer.token
});

export default connect(mapStatetoProps)(Landing);
