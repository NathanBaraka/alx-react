import React from 'react';
import { connect } from 'react-redux';  // Import the `connect` function from `react-redux`
import PropTypes from 'prop-types';    // Import `PropTypes` for prop validation

// Your App component (you may already have this structure)
class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;  // Access the `isLoggedIn` property from the Redux state
    return (
      <div>
        {/* Conditional rendering based on isLoggedIn */}
        {isLoggedIn ? (
          <h1>Welcome to the Dashboard</h1>
        ) : (
          <h1>Please log in</h1>
        )}
      </div>
    );
  }
}

// Define the mapStateToProps function
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isLoggedIn,  // Assuming `uiReducer` is part of your Redux state tree
  };
};

// Use connect to link the state to the component
export default connect(mapStateToProps)(App);

// Define the PropTypes for validation
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

