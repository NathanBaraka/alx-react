import React from 'react';
import { Provider } from 'react-redux'; // Import for Redux Provider
import { createStore } from 'redux'; // Import for creating the store
import rootReducer from '../reducers/rootReducer'; // Import your root reducer
import Notifications from '../Notifications/Notifications'; // Import Notifications component
import OtherComponent from '../OtherComponent/OtherComponent'; // Example of another component
import AnotherComponent from '../AnotherComponent/AnotherComponent'; // Another example component
import './App.css'; // Import your CSS file for styling

const store = createStore(rootReducer); // Create the Redux store

function App() {
  return (
    <Provider store={store}> {/* Provide the store to your app */}
      <div>
        <h1>My Application</h1> {/* Header of your app */}
        <OtherComponent /> {/* Other components in your application */}
        <AnotherComponent /> {/* Another example component */}
        <Notifications /> {/* Render Notifications component */}
      </div>
    </Provider>
  );
}

export default App;

