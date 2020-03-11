import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createChemist } from "../../redux/actions/chemistAction";
import _ from "lodash";

const ChemistRegForm = ({ createChemist }) => {
  const [chemFormData, handleChemForm] = useState({
    chem_name: "",
    chem_phone: "",
    chem_location: {},
    Address: "",
    Email: ""
  });
  const { chem_name, chem_phone, chem_location, Address, Email } = chemFormData;
  const handleSubmit = async e => {
    e.preventDefault();
    createChemist({ chem_name, chem_phone, chem_location, Address, Email });
  };

  const getLocation = () => {
    let options = {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 0
    };

    function success(pos) {
      let coords = pos.coords;
      let coordinates = [];
      coordinates.push(coords.longitude, coords.latitude);
      _.assign(chem_location, {
        type: "MultiPoint",
        coordinates: [coordinates]
      });
    }
    navigator.geolocation.getCurrentPosition(success, null, options);
  };

  const handleFormData = e => {
    handleChemForm({ ...chemFormData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <form>
        <label htmlFor="chem_name">Name</label>
        <input
          type="text"
          placeholder="Chemist name"
          id="chem_name"
          name="chem_name"
          value={chem_name}
          className="input my-2"
          onChange={e => handleFormData(e)}
        />
        <label htmlFor="chem_phone">Phone</label>
        <input
          type="text"
          pattern="[0-9]*"
          placeholder="Chemist phone"
          id="chem_phone"
          name="chem_phone"
          value={chem_phone}
          className="input my-2"
          onChange={e => handleFormData(e)}
        />
        <label htmlFor="chem_email">Email</label>
        <input
          type="email"
          placeholder="Chemist email"
          id="chem_email"
          name="Email"
          value={Email}
          className="input my-2"
          onChange={e => handleFormData(e)}
        />
        <label htmlFor="chem_address">Address</label>
        <textarea
          id="chem_address"
          className="textarea my-2"
          cols="30"
          rows="10"
          placeholder="Enter Address"
          name="Address"
          onChange={e => handleFormData(e)}
          value={Address}
        ></textarea>
      </form>
      <button className="button is-info m-2" onClick={getLocation}>
        Get location
      </button>
      <button
        className="button is-primary m-2"
        onClick={handleSubmit}
        value="submit"
        type="submit"
      >
        Create Chemist
      </button>
    </Fragment>
  );
};

ChemistRegForm.propTypes = {
  createChemist: PropTypes.func.isRequired
};

export default connect(null, { createChemist })(ChemistRegForm);

/**
 *  chem name, chem phone, chem location, chem contact(address, email)
 */
