// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications'; // Import the Notifications component

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div id="root-notifications">
        <Notifications /> {/* Render Notifications here */}
      </div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
