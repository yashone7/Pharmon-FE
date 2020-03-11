import React, { Fragment } from "react";

const SearchCard = props => {
  const { entity } = props;
  return (
    <Fragment>
      {entity ? (
        <Fragment>
          <h1 className="text-2xl p-2 my-2">Name: {entity.emp_name}</h1>
          <p className="text-xl p-2 my-2">ID: {entity._id}</p>
          <p className="text-xl p-2 my-2">Role: {entity.emp_role}</p>
          <p className="text-xl p-2 my-2">Phone: {entity.emp_phone}</p>
        </Fragment>
      ) : (
        <p className="text-2xl p-2 my-2">No employee exists</p>
      )}
    </Fragment>
  );
};

/** This is search card, it is a reusable component, it takes props and shows it into a card
 *  and upon clicking it it leads us into a form.
 *
 * Update form must take a component whose values are received as props and upon clicking
 * they should change.
 */

export default SearchCard;
