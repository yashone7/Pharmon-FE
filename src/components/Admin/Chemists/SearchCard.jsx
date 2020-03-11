import React, { Fragment } from "react";

const SearchCard = props => {
  const { entity } = props;
  console.log(entity);
  return (
    <Fragment>
      {entity ? (
        <Fragment>
          <h1 className="text-2xl p-2 my-2">Name: {entity.chem_name}</h1>
          <p className="text-xl p-2 my-2">ID: {entity._id}</p>
          <p className="text-xl p-2 my-2">ID: {entity.chem_phone}</p>
          {/* <p className="text-xl p-2 my-2">Location: {entity.chem_location}</p> */}
          <p className="text-xl p-2 my-2">
            Address: {entity.chem_contact.Address}
          </p>
          <p className="text-xl p-2 my-2">Email: {entity.chem_contact.Email}</p>
        </Fragment>
      ) : (
        <p className="text-2xl p-2 my-2">No Chemist exists</p>
      )}
    </Fragment>
  );
};

/** This is search card, it is a reusable component?, it takes props and shows it into a card
 *  and upon clicking it it leads us into a form.
 *
 * Update form must take a component whose values are received as props and upon clicking
 * they should change.
 */

export default SearchCard;
