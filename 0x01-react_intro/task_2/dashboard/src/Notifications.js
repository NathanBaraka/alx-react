// src/Notifications.js

import React from 'react';
import './Notifications.css'; // Import the CSS file
import closeIcon from './close-icon.png'; // Import the close icon image
import { getLatestNotification } from './utils'; // Import the function

export default function Notifications() {
    const handleCloseClick = () => {
        console.log("Close button has been clicked");
    };

    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>

            {/* Close button */}
            <button
                onClick={handleCloseClick}
                style={{ float: 'right', background: 'none', border: 'none', cursor: 'pointer' }}
                aria-label="Close"
            >
                <img src={closeIcon} alt="Close" />
            </button>

            {/* Unordered list of notifications */}
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
}
