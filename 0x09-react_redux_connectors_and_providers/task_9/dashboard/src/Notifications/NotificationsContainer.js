import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActions'; // Import your action to fetch notifications
import Notifications from './Notifications';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

const NotificationsContainer = ({ notifications, fetchNotifications, ...props }) => {
  useEffect(() => {
    fetchNotifications(); // Fetch notifications on component mount
  }, [fetchNotifications]);

  return <Notifications notifications={notifications} {...props} />; // Pass props to Notifications
};

// Map state to props
const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state), // Use the memoized selector
});

// Map dispatch to props
const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);

