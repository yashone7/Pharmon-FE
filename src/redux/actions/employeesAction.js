import axios from "axios";
import { setAlert } from "./alertAction";
import {
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_ERROR,
  GET_EMPLOYEES,
  GET_EMPLOYEES_ERROR,
  EDIT_EMPLOYEE,
  EDIT_EMPLOYEE_ERROR
} from "./types/actionTypes";
import { apiEndpoint } from "../../utils/apiEndpoint";

export const createEmployee = ({
  emp_name,
  emp_password,
  emp_phone,
  emp_role
}) => async dispatch => {
  const body = JSON.stringify({ emp_name, emp_role, emp_phone, emp_password });
  try {
    const res = await axios({
      method: "POST",
      url: apiEndpoint + "/api/employees",
      headers: {
        "Content-Type": "application/json"
      },
      data: body
    });
    dispatch({
      type: CREATE_EMPLOYEE,
      payload: res.data
    });
    dispatch(setAlert("Employee created successfully", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      for (let error of errors) {
        dispatch(setAlert(error.msg, "danger"));
      }
    }
    dispatch({ type: CREATE_EMPLOYEE_ERROR });
  }
};

export const updateEmployee = (
  { emp_name, emp_phone, emp_role },
  id
) => async dispatch => {
  const body = JSON.stringify({ emp_name, emp_phone, emp_role });
  try {
    const res = await axios({
      method: "PATCH",
      url: `${apiEndpoint}/api/employees/${id}`,
      headers: {
        "Content-Type": "application/json"
      },
      data: body
    });
    dispatch({
      type: EDIT_EMPLOYEE,
      payload: res.data
    });
    dispatch(setAlert("Employee updated successfully", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      for (let error of errors) {
        dispatch(setAlert(error.msg, "danger"));
      }
    }
    dispatch({ type: EDIT_EMPLOYEE_ERROR });
  }
};

export const getEmployees = () => async dispatch => {
  try {
    const res = await axios.get(apiEndpoint + "/api/employees");
    dispatch({
      type: GET_EMPLOYEES,
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
    dispatch({ type: GET_EMPLOYEES_ERROR });
  }
};
