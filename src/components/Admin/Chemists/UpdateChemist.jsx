import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import SearchCard from "./SearchCard";
import { Link, matchPath } from "react-router-dom";
import { getChemists } from "../../../redux/actions/chemistAction";

const UpdateChemist = ({ chemists, getChemists }) => {
  useEffect(() => {
    getChemists();
  }, [getChemists]);

  const [searchData, handleSearchData] = useState({ name: "" });
  const { name } = searchData;

  const handleSearch = e => {
    handleSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const sortedChemist = chemists.find(chemist => {
    return (
      _.toLower(_.replace(chemist.chem_name, /\s+/g, "")) ===
      _.toLower(_.replace(name, /\s+/g, ""))
    );
  });

  const match =
    sortedChemist &&
    matchPath(`/chemists/${sortedChemist._id}`, {
      path: "/chemists/:id",
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
        <SearchCard entity={sortedChemist} />
        {sortedChemist && (
          <Fragment>
            <button>
              <Link
                to={{
                  pathname: `/chemists/${match.params.id}`,
                  state: { sortedChemist }
                }}
                className={`bg-transparent m-2 py-3 px-3 rounded border hover:bg-pink-400 text-gray-800 hover:text-gray-200`}
              >
                Edit Chemist
              </Link>
            </button>

            <button
              className={`bg-transparent hover:bg-red-500 m-2 py-3 px-3 rounded border hover:text-gray-300`}
            >
              Delete Chemist
            </button>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  chemists: state.chemistReducer.chemists
});

export default connect(mapStateToProps, { getChemists })(UpdateChemist);
