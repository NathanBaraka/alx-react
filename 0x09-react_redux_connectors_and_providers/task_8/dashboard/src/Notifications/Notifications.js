import React from 'react';
import { connect } from 'react-redux';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { setNotificationFilter } from '../actions/notificationActions'; // Import your action creator

const Notifications = ({ notifications, setNotificationFilter }) => {
  return (
    <div>
      <h2>Here is the list of notifications:</h2>
      <button onClick={() => setNotificationFilter('URGENT')}>‼️</button>
      <button onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message} {/* Assuming notification has a message property */}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Map state to props
const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state), // Use the new selector
});

// Map dispatch to props
const mapDispatchToProps = {
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

