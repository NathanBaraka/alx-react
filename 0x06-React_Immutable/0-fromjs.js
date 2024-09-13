// 0-fromjs.js
import { fromJS } from 'immutable';

/**
 * Converts a JavaScript object into an immutable Map.
 *
 * @param {Object} object - The object to convert.
 * @returns {Map} - The immutable Map representation of the object.
 */
export function getImmutableObject(object) {
  return fromJS(object);
}

