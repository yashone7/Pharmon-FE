import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authAction";
import PropTypes from "prop-types";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import "../styles/utils.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faSlidersH,
  faCubes,
  faChartLine,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import Employees from "./Employees";
import Profile from "./Profile";
import Doctors from "./Doctors";
import Chemists from "./Chemists";
import Distributors from "./distributors";

const Admin = ({ logout, auth: { isAuthenticated, loading } }) => {
  const handleLogout = () => {
    logout();
  };
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

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Fragment>
      <div className="main flex h-screen">
        <div
          className={`w-3/5 sm:w-1/4 md:w-1/4 lg:w-1/5 bg-stoic-green ${sideBar}`}
        >
          <div className="block text-center mt-3">
            <FontAwesomeIcon icon={faCubes} color="#83ed12" size="4x" />
            <h3 className="text-3xl text-green-400 ">PHARMON</h3>
          </div>
          <div className="block mt-5 mb-5 pl-3">
            <div className="inline-flex items-baseline">
              <FontAwesomeIcon icon={faSlidersH} size="sm" color="white" />
              <p className="text-gray-400 hover:bg-dull-green text-base ml-2 p-2">
                Dashboard
              </p>
            </div>
            <div>
              <ul className="text-gray-400 pl-10 mt-3 mb-2">
                <Link
                  to="/employees"
                  className="text-gray-400 hover:text-gray-400"
                >
                  <li className="mt-1 p-2  w-full text-sm hover:bg-dull-green mb-2">
                    Employees
                  </li>
                </Link>
                <Link
                  to="/doctors"
                  className="text-gray-400 hover:text-gray-400"
                >
                  <li className="mt-1 p-2 text-sm hover:bg-dull-green mb-2">
                    Doctors
                  </li>
                </Link>
                <Link
                  to="/chemists"
                  className="text-gray-400 hover:text-gray-400"
                >
                  <li className="mt-1 p-2 text-sm hover:bg-dull-green mb-2">
                    Chemists
                  </li>
                </Link>
                <Link
                  to="/distributors"
                  className="text-gray-400 hover:text-gray-400"
                >
                  <li className="mt-1 p-2 text-sm hover:bg-dull-green mb-2">
                    Distributors
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="block mt-5 mb-5 pl-3">
            <div className="inline-flex items-baseline">
              <FontAwesomeIcon icon={faChartLine} size="sm" color="white" />
              <p className="text-gray-400 text-base hover:bg-dull-green ml-2 p-2">
                Analytics
              </p>
            </div>
            <div>
              <ul className="text-gray-400 pl-10 mt-3 mb-2">
                <li className="mt-1 p-2 text-sm hover:bg-dull-green mb-2">
                  Employees
                </li>
                <li className="mt-1 p-2 text-sm hover:bg-dull-green mb-2">
                  Chemists
                </li>
                <li className="mt-1 p-2 text-sm hover:bg-dull-green mb-2">
                  Distributors
                </li>
                <li className="mt-1 p-2 text-sm hover:bg-dull-green mb-2">
                  Sales
                </li>
              </ul>
            </div>
          </div>
        </div>

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
                    <div className="dropdown-item" onClick={handleLogout}>
                      <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
                      <span className="pl-1 ml-1">Log out</span>
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
          <div className="rounded mt-3 ml-1 mr-1 p-1 mb-1" id="container">
            <div>
              <span className="text-gray-800 sm:text-xl md:text-2xl text-lg">
                Hello dynamic user output
              </span>
            </div>
            <div className="block rounded shadow-sm">
              <Switch>
                <Route exact path="/employees" component={Employees} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/chemists" component={Chemists} />
                <Route exact path="/distributors" component={Distributors} />
                <Route exact path="/doctors" component={Doctors} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Admin.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(mapStateToProps, { logout })(Admin);
