import React, { Fragment, useState } from "react";
import CreateChemist from "./CreateChemist";
import UpdateChemist from "./UpdateChemist";
//import Map from "./Map";

const Chemists = () => {
  const [createChemistForm, toggleCreateChemist] = useState("hidden");
  const [updateChemistForm, toggleUpdateForm] = useState("hidden");

  const showForm = () => {
    if (createChemistForm === "hidden") {
      toggleCreateChemist("");
    } else toggleCreateChemist("hidden");
  };

  const showUpdateForm = () => {
    if (updateChemistForm === "hidden") {
      toggleUpdateForm("");
    } else toggleUpdateForm("hidden");
  };

  return (
    <Fragment>
      <div className="p-3">
        <button
          className="bg-transparent hover:bg-pink-400 hover:text-gray-200 border p-2 rounded-full mx-3"
          onClick={showForm}
        >
          Create Chemist
        </button>
        <button
          className="bg-transparent hover:bg-pink-400 hover:text-gray-200 border p-2 rounded-full mx-3"
          onClick={showUpdateForm}
        >
          Update Chemist
        </button>
      </div>
      <div
        className={`${createChemistForm} pl-3 w-2/3 h-auto`}
        id="create-employee-form"
      >
        <CreateChemist />
      </div>
      <div className={`${updateChemistForm} pl-3 w-2/3 h-auto`}>
        <p className="p-2 m-1 text-xl">Search for Chemists</p>
        <UpdateChemist />
      </div>
    </Fragment>
  );
};

export default Chemists;
