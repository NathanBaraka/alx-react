import React from 'react';

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

export default Notifications;

