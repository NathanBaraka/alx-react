import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notifications'; // Import the selector
import PropTypes from 'prop-types';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications(); // Fetch notifications when the component mounts
  }

  handleNotificationClick = (id) => {
    this.props.markAsRead(id); // Mark notification as read when clicked
  };

  render() {
    const { notifications } = this.props; // Destructure notifications from props

    return (
      <div>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} onClick={() => this.handleNotificationClick(notification.id)}>
              {notification.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

// Map state and dispatch to props
const mapStateToProps = (state) => ({
  notifications: getUnreadNotifications(state), // Use the selector to get unread notifications
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

