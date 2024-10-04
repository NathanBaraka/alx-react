import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';  // Import PropTypes
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActions';

class App extends Component {
  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

    return (
      <div className="App">
        {/* Other components */}

        <button onClick={displayNotificationDrawer}>Show Notifications</button>
        <button onClick={hideNotificationDrawer}>Hide Notifications</button>

        {displayDrawer ? (
          <div className="notification-drawer">
            {/* Notification drawer content */}
          </div>
        ) : (
          <div>No Notifications</div>
        )}
      </div>
    );
  }
}

// Updated mapStateToProps to include displayDrawer
export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),
  };
};

// Simplified mapDispatchToProps without bindActionCreators
export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

// Define propTypes for validation
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

// Define defaultProps for default values
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

