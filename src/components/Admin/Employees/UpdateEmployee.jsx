import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import SearchCard from "../common/SearchCard";
import { Link, matchPath } from "react-router-dom";
import { getEmployees } from "../../../redux/actions/employeesAction";

const UpdateEmployee = ({ getEmployees, employees }) => {
  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  const [searchData, handleSearchData] = useState({ name: "" });
  const { name } = searchData;

  const handleSearch = e => {
    handleSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const sortedEmployees = employees.find(employee => {
    return (
      _.toLower(_.replace(employee.emp_name, /\s+/g, "")) ===
      _.toLower(_.replace(name, /\s+/g, ""))
    );
  });

  const match =
    sortedEmployees &&
    matchPath(`/employees/${sortedEmployees._id}`, {
      path: "/employees/:id",
      exact: true,
      strict: false
    });

  return (
    <Fragment>
      <div className="control has-icons-left">
        <input
          className="input"
          type="text"
          value={name}
          name="name"
          onChange={e => handleSearch(e)}
          placeholder="Search for employees"
        />
        <span className="icon is-left">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </span>
        <button className="button is-primary mt-2" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="shadow-md rounded">
        <SearchCard entity={sortedEmployees} />
        {sortedEmployees && (
          <Fragment>
            <button>
              <Link
                to={{
                  pathname: `/employees/${match.params.id}`,
                  state: { sortedEmployees }
                }}
                className={`bg-transparent m-2 py-3 px-3 rounded border hover:bg-pink-400 text-gray-800 hover:text-gray-200`}
              >
                Edit Employee
              </Link>
            </button>

            <button
              className={`bg-transparent hover:bg-red-500 m-2 py-3 px-3 rounded border hover:text-gray-300`}
            >
              Delete Employee
            </button>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  employees: state.employeeReducer.employees
});

export default connect(mapStateToProps, { getEmployees })(UpdateEmployee);

/**
 * Here we are using matchPath function to check if the employee with a given id matches against the schema
 * described in the options argument. The function returns an object it has params object we can use
 * match.params.id or we could use sortEmployees._id. After that we have to pass the sorted employee to
 * update form where we can actually call an redux action where we edit and submit the form.
 */
