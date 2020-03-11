import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubes,
  faChartLine,
  faSlidersH
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <Fragment>
      <div
        className={`w-3/5 sm:w-1/4 md:w-1/4 lg:w-1/5 h-screen bg-stoic-green {sideBar}`}
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
              <Link to="/doctors" className="text-gray-400 hover:text-gray-400">
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
              <Link
                to="/products"
                className="text-gray-400 hover:text-gray-400"
              >
                <li className="mt-1 p-2 text-sm hover:bg-dull-green mb-2">
                  Products
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
    </Fragment>
  );
};

export default SideBar;
