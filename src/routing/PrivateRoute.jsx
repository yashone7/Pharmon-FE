// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { Route, Redirect } from "react-router-dom";

// const PrivateRoute = ({
//   component: Component,
//   isAutheticated,
//   loading,
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={props =>
//       !isAutheticated && !loading ? (
//         <Redirect to="/login" />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

// PrivateRoute.propTypes = {
//   isAutheticated: PropTypes.bool.isRequired,
//   loading: PropTypes.bool.isRequired
// };

// const mapStateToProps = state => ({
//   isAutheticated: state.authReducer.isAutheticated,
//   loading: state.authReducer.loading
// });

// export default connect(mapStateToProps)(PrivateRoute);
