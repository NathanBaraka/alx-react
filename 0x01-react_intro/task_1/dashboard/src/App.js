// src/App.js

import React from 'react';
import { getFullYear, getFooterCopy } from './utils'; // Import the functions
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src="./logo.svg" alt="Holberton School Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
