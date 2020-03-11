import axios from "axios";
import { setAlert } from "./alertAction";
import { apiEndpoint } from "../../utils/apiEndpoint";
import {
  CREATE_CHEMIST,
  GET_CHEMISTS,
  DELETE_CHEMIST,
  EDIT_CHEMIST,
  EDIT_CHEMIST_ERROR,
  GET_CHEMISTS_ERROR
} from "./types/actionTypes";
import _ from "lodash";

export const createChemist = ({
  chem_name,
  chem_phone,
  chem_location,
  address,
  email
}) => async dispatch => {
  const chem_contact = {};
  _.assign(chem_contact, { address, email });
  _.startCase(chem_name);
  const body = JSON.stringify({
    chem_name,
    chem_phone,
    chem_location,
    chem_contact
  });
  console.log(body);
  try {
    const res = await axios({
      method: "POST",
      url: apiEndpoint + "/api/chemists",
      headers: {
        "Content-Type": "application/json"
      },
      data: body
    });
    dispatch({
      type: CREATE_CHEMIST,
      payload: res.data
    });
    dispatch(setAlert("Chemist created successfully", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      for (let error of errors) {
        dispatch(setAlert(error.msg, "danger"));
      }
    }
  }
};

export const updateChemist = (
  { chem_name, chem_phone, chem_location, address, email },
  id
) => async dispatch => {
  const chem_contact = {};
  _.assign(chem_contact, { address, email });
  _.startCase(chem_name);
  const body = JSON.stringify({
    chem_name,
    chem_phone,
    chem_location,
    chem_contact
  });
  try {
    const res = await axios({
      method: "PATCH",
      url: `${apiEndpoint}/api/chemists/${id}`,
      headers: {
        "Content-Type": "application/json"
      },
      data: body
    });
    dispatch({
      type: EDIT_CHEMIST,
      payload: res.data
    });
    dispatch(setAlert("Chemist Updated successfully", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      for (let error of errors) {
        dispatch(setAlert(error.msg, "danger"));
      }
    }
  }
};

export const getChemists = () => async dispatch => {
  try {
    const res = await axios.get(apiEndpoint + "/api/chemists");
    dispatch({
      type: GET_CHEMISTS,
      payload: res.data
    });
    console.log(res.data);
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      for (let error of errors) {
        dispatch(setAlert(error.msg, "danger"));
      }
    }
    dispatch({ type: GET_CHEMISTS_ERROR });
  }
};
