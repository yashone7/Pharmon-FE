import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authAction";

const Navbar = ({ logout }) => {
  const [sideBar, toggle] = useState("");
  const [profile, toggleProfile] = useState("");

  const handleProfile = () => {
    if (profile === "") {
      toggleProfile("is-active");
    } else toggleProfile("");
    console.log(profile);
  };

  const handleSideBar = () => {
    if (sideBar === "") {
      toggle("hidden");
    }
    if (sideBar === "hidden") {
      toggle("");
    }
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <Fragment>
      <div className="w-full h-full">
        <nav
          className="navbar is-flex-touch justify-between ml-1 mr-1 p-1 mt-2 rounded shadow-md"
          aria-label="main navigation"
        >
          <div className="navbar-start">
            <div className="navbar-item p-2" onClick={handleSideBar}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </div>
          </div>
          <div className="navbar-end">
            <button className="navbar-item" onClick={handleProfile}>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </button>
            <div className={`dropdown is-right ${profile}`}>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <button onClick={handleLogout}>
                      <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
                      <span className="pl-1 ml-1">Log out</span>
                    </button>
                  </div>
                  <div className="dropdown-item">
                    <Link className="text-gray-800" to="/profile">
                      My Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(null, { logout })(Navbar);
