import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from "./types/actionTypes";
import axios from "axios";
import { setAlert } from "./alertAction";
import setAuthToken from "../../utils/setAuthToken";
import { apiEndpoint } from "../../utils/apiEndpoint";

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(apiEndpoint + "/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const login = (emp_phone, emp_password) => async dispatch => {
  const body = JSON.stringify({ emp_phone, emp_password });
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:2000/api/auth",
      headers: {
        "Content-Type": "application/json"
      },
      data: body
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      for (let error of errors) {
        dispatch(setAlert(error.msg, "danger"));
      }
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
