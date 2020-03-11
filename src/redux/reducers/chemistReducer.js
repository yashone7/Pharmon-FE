import {
  GET_CHEMIST,
  CREATE_CHEMIST,
  DELETE_CHEMIST,
  GET_CHEMISTS,
  GET_CHEMISTS_ERROR,
  EDIT_CHEMIST,
  EDIT_CHEMIST_ERROR
} from "../actions/types/actionTypes";

const initialState = {
  loading: true,
  chemist: null,
  chemists: []
};

export default function(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case CREATE_CHEMIST:
      return {
        ...state,
        loading: false,
        chemist: payload
      };
    case GET_CHEMISTS:
      return {
        ...state,
        loading: false,
        chemists: payload
      };
    case EDIT_CHEMIST:
      return {
        ...state,
        loading: false,
        chemist: payload
      };
    case EDIT_CHEMIST_ERROR:
      return {
        ...state,
        loading: false
      };
    case GET_CHEMISTS_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
