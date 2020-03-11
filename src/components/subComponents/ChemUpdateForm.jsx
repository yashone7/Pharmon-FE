import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getChemists } from "../../redux/actions/chemistAction";
import PropTypes from "prop-types";
import SearchCard from "../subComponents/SearchCard";
import _ from "lodash";

const ChemUpdateForm = ({ getChemists, chemists }) => {
  useEffect(() => {
    getChemists();
  }, [getChemists]);

  const [searchBarValue, setSearchBarValue] = useState({ name: "" });
  const { name } = searchBarValue;

  const handleChange = e => {
    setSearchBarValue({ ...searchBarValue, [e.target.name]: e.target.value });
  };

  const renderSearchCard = () => {
    const chem = _.filter(chemists, function(c) {
      return (
        _.toLower(_.replace(c.chem_name, /\s+/g, "")) ===
        _.toLower(_.replace(name, /\s+/g, ""))
      );
    });
    const chemist = {};
    _.assign(chemist, chem[0]);
    return <SearchCard name={chemist.chem_name} />;
  };
  return (
    <Fragment>
      <div className="control has-icons-left">
        <input
          type="text"
          className="input"
          placeholder="Search for a chemist"
          name="name"
          value={name}
          onChange={e => handleChange(e)}
        />
        <span className="icon is-left">
          <FontAwesomeIcon icon={faSearch} size="sm" />
        </span>
        <button className="my-2 button is-primary" onClick={handleChange}>
          Search
        </button>
        {renderSearchCard()}
      </div>
    </Fragment>
  );
};

ChemUpdateForm.propTypes = {
  chemists: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  chemists: state.chemistReducer.chemists
});

export default connect(mapStateToProps, { getChemists })(ChemUpdateForm);
