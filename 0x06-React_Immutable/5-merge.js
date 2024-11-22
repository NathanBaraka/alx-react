// 5-merge.js
import { List, Map } from 'immutable';

/**
 * Concatenates two arrays into an Immutable List.
 *
 * @param {Array} page1 - The first array.
 * @param {Array} page2 - The second array.
 * @returns {List} - An Immutable List containing the values of the two pages.
 */
export function concatElements(page1, page2) {
  return List([...page1, ...page2]);
}

/**
 * Merges two objects into an Immutable List.
 *
 * @param {Object} page1 - The first object.
 * @param {Object} page2 - The second object.
 * @returns {List} - An Immutable List containing the values of the two pages.
 */
export function mergeElements(page1, page2) {
  const mergedMap = Map(page1).merge(Map(page2));
  return mergedMap.valueSeq().toList(); // Get the values as a List
}

