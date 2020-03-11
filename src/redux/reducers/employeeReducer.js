import {
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_ERROR,
  GET_EMPLOYEES_ERROR,
  GET_EMPLOYEES,
  EDIT_EMPLOYEE,
  EDIT_EMPLOYEE_ERROR
} from "../actions/types/actionTypes";

const initialState = {
  employee: null,
  employees: [],
  loading: true
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case CREATE_EMPLOYEE:
      return {
        ...state,
        loading: false,
        employee: payload /* payload: res.data */
      };
    case CREATE_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false
      };
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: payload,
        loading: false
      };
    case GET_EMPLOYEES_ERROR:
      return {
        ...state,
        loading: false
      };
    case EDIT_EMPLOYEE:
      return {
        ...state,
        employee: payload,
        loading: false
      };
    case EDIT_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
