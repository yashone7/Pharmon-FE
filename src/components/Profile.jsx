import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Profile = ({ auth: { isAuthenticated } }) => {
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="text-center text-lg">
      <h1>
        this is profile page Lorem,
        {console.log("this is test")}
      </h1>
    </div>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(mapStateToProps)(Profile);
