import { fork, take, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  createCameraSession,
  fetchedCameraSession,
} from '../actions';

const $$$ = undefined;

const request = axios.create({
  baseURL: 'http://localhost:4000',
  responseType: 'json',
});

const cameraSessionRequest = () => (
  request({
    method: 'post',
    url: '/osc/commands/execute',
    data: {
      name: 'camera.startSession',
    },
  })
);

const cameraInfoRequest = () => (
  request({
    method: 'get',
    url: '/osc/info',
    data: {},
  })
);

function* cameraSaga() {
  while (typeof $$$ === 'undefined') {
    yield take(`${createCameraSession}`);
    try {
      const info = yield call(cameraInfoRequest);
      console.info(info);
      const response = yield call(cameraSessionRequest);
      yield put(fetchedCameraSession(response.body));
    } catch (_err) {
      console.error(_err);
    }
  }
}

export default function* rootSaga() {
  yield fork(cameraSaga);
}
