import React, { Fragment } from "react";
import decoder from "jwt-decode";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";

const AdminDashboard = ({ isAuthenticated, token, children }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  if (isAuthenticated) {
    const employee = decoder(token);
    if (employee.user.role !== "admin") {
      return <Redirect to="/login" />;
    }
  }
  return (
    <Fragment>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  token: state.authReducer.token
});

export default connect(mapStateToProps)(AdminDashboard);
