import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div
      key={alert.id}
      className={`mx-4 my-2 notification is-${alert.alertType}`}
    >
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  alerts: state.alertReducer
});

export default connect(mapStateToProps)(Alert);
