import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Notifications extends PureComponent {
  render() {
    const { listNotifications, markNotificationAsRead } = this.props;

    return (
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          {listNotifications.map((notification) => (
            <li key={notification.id}>
              {notification.value}
              <button
                onClick={() => markNotificationAsRead(notification.id)}
              >
                Mark as read
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    })
  ).isRequired,
  markNotificationAsRead: PropTypes.func.isRequired,
};

export default Notifications;

