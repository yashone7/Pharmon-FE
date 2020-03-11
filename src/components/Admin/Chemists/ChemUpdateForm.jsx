import React, { Fragment } from "react";
import { connect } from "react-redux";
import { updateChemist } from "../../../redux/actions/chemistAction";

const ChemUpdateForm = ({ updateChemist }) => {
  return (
    <Fragment>
      <h1>Chem update form</h1>
    </Fragment>
  );
};

/**
 * Here I'm tring to implement map component in which upon changing the maker the location also changes,
 * so if at all there is any need we can adjust the marker and get the location of chemist.
 *
 */

export default connect(null, { updateChemist })(ChemUpdateForm);
