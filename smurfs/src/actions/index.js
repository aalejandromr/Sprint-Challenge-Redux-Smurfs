/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURFS = "GET_SMURFS";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const ACTION_SUCCESS = "ACTION_SUCCESS";
export const ACTION_FAILURE = "ACTION_FAILURE";
export const EDIT_SMURF = "EDIT_SMURF";

const api = "https://reeiy.sse.codesandbox.io";

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  return axios.post(`${api}/smurfs`, smurf).then(res => {
    dispatch({ type: ACTION_SUCCESS, payload: res.data });
    return true;
  }).catch(err => console.log(err));
};

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  return axios
    .get(`${api}/smurfs`)
    .then(res => {
      setTimeout(() => {
        dispatch({ type: ACTION_SUCCESS, payload: res.data });
      }, 1000);
    })
    .catch(err => {
      console.log(err);
    });
};

export const updateSmurf = (id, smurf) => dispatch => {
  dispatch({ type: UPDATE_SMURF });
  return axios.put(`${api}/smurfs/${id}`, smurf).then(res => {
    dispatch({ type: ACTION_SUCCESS, payload: res.data });
    return true;
  }).catch(err => console.log(err));
}

export const editSmurf = () => dispatch => {
  dispatch({ type: EDIT_SMURF });
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF });
  return axios.delete(`${api}/smurfs/${id}`).then(res => {
    dispatch({ type: ACTION_SUCCESS, payload: res.data })
    return true;
  }).catch(err => console.log(err));
}
