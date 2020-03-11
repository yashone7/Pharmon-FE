import React, { Fragment } from "react";

const SearchCard = props => {
  return (
    <Fragment>
      <div className="shadow-md rounded p-5 w-32 height-auto">
        <h3 className="text-xl">{props.name}</h3>
      </div>
    </Fragment>
  );
};

export default SearchCard;
