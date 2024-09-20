import { schema, normalize } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Define user entity
const user = new schema.Entity('users');

// Define message entity with idAttribute as 'guid'
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define notification entity with relationships
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize the data
const normalizedData = normalize(notificationsData.default, [notification]);

export { normalizedData, user, message, notification };

