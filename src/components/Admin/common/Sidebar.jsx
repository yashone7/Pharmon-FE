import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="w-1/6 bg-blue-200 h-screen">
        <div className="" id="card group">
          <h3 className="text-lg pt-2 ml-1">Dashboard</h3>
          <div className="ml-3" id="card-body">
            <ul>
              <Link className="text-gray-800" to="/employees">
                <li className="my-3 pl-1 hover:bg-blue-300 py-1">Employees</li>
              </Link>
              <Link className="text-gray-800" to="/chemists">
                <li className="my-3 pl-1 hover:bg-blue-300 py-1">Chemists</li>
              </Link>
              <Link className="text-gray-800" to="/doctors">
                <li className="my-3 pl-1 hover:bg-blue-300 py-1">Doctors</li>
              </Link>
              <Link className="text-gray-800" to="/distributors">
                <li className="my-3 pl-1 hover:bg-blue-300 py-1">
                  Distributors
                </li>
              </Link>
              <Link className="text-gray-800" to="/products">
                <li className="my-3 pl-1 hover:bg-blue-300 py-1">Products</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="" id="card group">
          <h3 className="text-lg pt-2 ml-1">Analytics</h3>
          <div className="ml-3" id="card-body">
            <ul>
              <li className="my-3 pl-1 hover:bg-blue-300 py-1">Employees</li>
              <li className="my-3 pl-1 hover:bg-blue-300 py-1">Chemists</li>
              <li className="my-3 pl-1 hover:bg-blue-300 py-1">Doctors</li>
              <li className="my-3 pl-1 hover:bg-blue-300 py-1">Distributors</li>
              <li className="my-3 pl-1 hover:bg-blue-300 py-1">Products</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
