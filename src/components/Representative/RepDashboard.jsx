import React, { Fragment } from "react";
import { connect } from "react-redux";
import decoder from "jwt-decode";
import { Redirect } from "react-router-dom";

const RepDashboard = ({ isAuthenticated, token }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  if (isAuthenticated) {
    const employee = decoder(token);
    if (employee.user.role !== "representative") {
      return <Redirect to="/login" />;
    }
  }
  return (
    <Fragment>
      <h1>Rep dashboard</h1>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  token: state.authReducer.token
});

export default connect(mapStateToProps)(RepDashboard);
