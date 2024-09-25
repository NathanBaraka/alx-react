// task_4/dashboard/src/schema/courses.js

import { schema, normalize } from 'normalizr';

// Define the course schema
const course = new schema.Entity('courses');

// Normalizing function
export const coursesNormalizer = (data) => normalize(data, [course]);

