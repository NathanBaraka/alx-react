import React from 'react';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div className="Notifications">
        <div onClick={handleDisplayDrawer}>
          <p>Your notifications</p>
        </div>
        {displayDrawer ? (
          <div className="drawer">
            <button onClick={handleHideDrawer}>Close</button>
            {/* Rest of the notification content */}
          </div>
        ) : null}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {}
};

export default Notifications;

