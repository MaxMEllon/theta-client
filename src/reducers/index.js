import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions';

export const initialState = {
  camera: {
    sessionId: null,
  },
};

const cameraReducer = createReducer({
  [actions.fetchedCameraSession]: (state, payload) => {
    const { camera } = payload;
    return { ...camera };
  },
}, initialState.camera);

export default combineReducers(
  {
    camera: cameraReducer,
  },
);
