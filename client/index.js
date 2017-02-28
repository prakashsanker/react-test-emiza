import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import {deliveries} from './reducers/deliveries.js';
import thunkMiddleware from 'redux-thunk'

let store = createStore(deliveries,
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
