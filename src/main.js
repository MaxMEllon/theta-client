import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Controller from './components/Controller';

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Controller />
    </Provider>,
    document.getElementById('main'),
  );
};
