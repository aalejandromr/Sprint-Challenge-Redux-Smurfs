/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  ADD_SMURF,
  DELETE_SMURF,
  UPDATE_SMURF,
  GET_SMURFS,
  ACTION_SUCCESS,
  ACTION_FAILURE,
  EDIT_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isUpdating: false,
  success: false,
  failure: false,
  errors: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        isFetching: true,
        success: false,
        failure: false,
        errors: null
      };
    case ACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        failure: false,
        errors: null,
        isUpdating: false,
        smurfs: action.payload
      };
    case ACTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        failure: true,
        errors: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        isFetching: true,
        success: false,
        failure: false,
        errors: null
      }
    case EDIT_SMURF:
      return {
        ...state,
        isUpdating: true
      }
    case UPDATE_SMURF:
      return {
        ...state,
        isFetching: true,
        isUpdating: false,
        success: false,
        failure: false,
        errors: null
      }
    case DELETE_SMURF:
      return {
        ...state,
        isFetching: true
      }
    default:
      return state;
  }
};
