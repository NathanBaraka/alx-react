import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { uiReducer } from './reducers/uiReducer';  // Import your uiReducer
import App from './App/App';

// Create the Redux store with thunk middleware
const store = createStore(
  uiReducer, 
  applyMiddleware(thunk)  // Apply thunk middleware to handle async actions
);

// Pass the store to the Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

