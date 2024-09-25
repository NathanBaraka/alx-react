// task_4/dashboard/src/schema/notifications.js

import { schema, normalize } from 'normalizr';

// Define the notification schema
const notification = new schema.Entity('notifications');

// Normalizing function
export const notificationsNormalizer = (data) => normalize(data, [notification]);

