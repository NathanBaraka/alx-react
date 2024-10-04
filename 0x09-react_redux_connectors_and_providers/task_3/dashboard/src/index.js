import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // Import DevTools extension
import rootReducer from './reducers'; // Import your root reducer
import App from './App'; // Import your main App component

// Create Redux store with thunk middleware and DevTools
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Enable Redux DevTools
);

// Render the application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

