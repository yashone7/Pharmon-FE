import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/actions/authAction";
import decoder from "jwt-decode";

const Landing = ({ isAuthenticated, token }) => {
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

export default connect(mapStatetoProps, { login })(Landing);
