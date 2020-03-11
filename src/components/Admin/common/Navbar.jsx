import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/authAction";

const Navbar = ({ logout }) => {
  return (
    <Fragment>
      <nav
        className="navbar pt-2 is-light"
        role="navigation"
        aria-label="admin-navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item text-2xl">MY APP</div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <button className="button is-primary mx-3">
              <Link className="text-white" to="/profile">
                Profile
              </Link>
            </button>
            <button className="button mx-3 is-info" onClick={logout}>
              Log out
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default connect(null, { logout })(Navbar);
