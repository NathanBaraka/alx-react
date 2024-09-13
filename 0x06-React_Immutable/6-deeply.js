// 6-deeply.js
import { Map } from 'immutable';

/**
 * Merges two objects deeply into an Immutable List.
 *
 * @param {Object} page1 - The first object.
 * @param {Object} page2 - The second object.
 * @returns {List} - An Immutable List containing the combined values of the two pages.
 */
export function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  const mergedMap = map1.mergeDeep(map2); // Deep merge the maps

  return mergedMap.valueSeq().toList(); // Get the values as a List
}

