import React from 'react';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div>
        <div onClick={handleDisplayDrawer} data-testid="menu-item">Your notifications</div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              onClick={handleHideDrawer}
              data-testid="close-button"
            >
              Close
            </button>
            <p>Here is the list of notifications</p>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;

