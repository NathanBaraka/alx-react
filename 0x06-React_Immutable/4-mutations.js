// 4-mutations.js
import { Map } from 'immutable';

// Create an Immutable Map with the specified object
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Modify the values for the specified indices to create map2
export const map2 = map
  .set(2, 'Benjamin') // Modify the value for index 2
  .set(4, 'Oliver');  // Modify the value for index 4

