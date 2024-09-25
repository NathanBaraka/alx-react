React Redux Reducer and Selector
Description
This project is part of the ALX React Redux course and focuses on creating and managing the application's state using Reducers and Selectors in Redux. The project is designed to teach concepts like writing pure reducers, handling state immutability, normalizing state with Normalizr, and testing reducers.

The project is based on a dashboard application developed in previous exercises, and the goal is to create a basic reducer for handling UI state changes like displaying notifications, user login/logout actions, and testing those reducers.

Learning Objectives
At the end of this project, you will be able to:

Understand the purpose of a reducer and its role within a Redux application.
Explain why a reducer should remain pure and free of side effects.
Understand the importance of state immutability and how to handle it.
Use Normalizr to normalize complex data structures in your Redux store.
Understand what Selectors are, and how and when to use them to retrieve state from the store.
Write unit tests for reducers to ensure correctness.
Project Structure
css
Copy code
alx-react
├── 0x08-react_redux_reducer_selector
│   ├── dashboard
│   │   ├── src
│   │   │   ├── reducers
│   │   │   │   ├── uiReducer.js
│   │   │   │   ├── uiReducer.test.js
Files:
reducers/uiReducer.js: Defines the initial state and reducer function for handling UI actions such as showing/hiding notification drawer and handling user login/logout.
reducers/uiReducer.test.js: A test suite for the uiReducer to ensure the reducer behaves as expected.
Requirements
Allowed editors: vi, vim, emacs, Visual Studio Code.
Node version: 12.x.x, npm version: 6.x.x.
Your project should be built and tested on Ubuntu 18.04 LTS.
All your files should end with a new line.
A README.md file is required at the root of your project directory.
All functions must be exported.
The project should be tested thoroughly to ensure correctness.
Instructions
1. Create a Reducer
In reducers/uiReducer.js, create a reducer with the following initial state:

javascript
Copy code
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};
Write the reducer function that handles the following actions:

DISPLAY_NOTIFICATION_DRAWER: Set isNotificationDrawerVisible to true.
HIDE_NOTIFICATION_DRAWER: Set isNotificationDrawerVisible to false.
LOGIN_SUCCESS: Set isUserLoggedIn to true.
LOGIN_FAILURE: Set isUserLoggedIn to false.
LOGOUT: Set isUserLoggedIn to false.
Ensure that state is updated immutably using the spread operator.

2. Write Tests
In reducers/uiReducer.test.js, write unit tests for the reducer:

Test that the reducer returns the initial state when no action is passed.
Test that the reducer returns the initial state when an irrelevant action (e.g., SELECT_COURSE) is passed.
Test that the reducer handles the DISPLAY_NOTIFICATION_DRAWER action correctly and updates the state.
3. Testing the Reducer
To run the tests for this project:

bash
Copy code
npm test
Make sure that all tests pass before submitting your project.

Technologies Used
React: JavaScript library for building user interfaces.
Redux: A predictable state container for JavaScript apps.
Normalizr: A tool to normalize nested or relational data.
Jest: A JavaScript testing framework for unit testing.
Immutable.js: A library for handling immutable data structures in JavaScript.
Key Concepts
Reducers
Reducers are pure functions that take the current state and an action as arguments, and return a new state. Reducers must not mutate the state directly but rather return a new updated state.

Immutability
Immutability in Redux means that you should never directly modify the state object. Instead, you create new copies of the state when necessary, using tools like the spread operator or Immutable.js.

Normalization
Using Normalizr, complex nested data can be normalized into a flat structure for easy management in the Redux store.

Selectors
Selectors are functions that extract or compute specific pieces of state from the Redux store. They encapsulate how to retrieve a certain piece of state, keeping components clean and focused.

Installation and Setup
Clone this repository:
bash
Copy code
git clone https://github.com/your-username/alx-react.git
Navigate to the project directory:
bash
Copy code
cd 0x08-react_redux_reducer_selector/dashboard
Install dependencies:
bash
Copy code
npm install
Run tests to ensure everything is set up correctly:
bash
Copy code
npm test
