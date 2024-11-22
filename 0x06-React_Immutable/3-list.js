// 3-list.js
import { List } from 'immutable';

/**
 * Converts an array into an immutable List.
 *
 * @param {Array} array - The array to convert.
 * @returns {List} - The immutable List representation of the array.
 */
export function getListObject(array) {
  return List(array);
}

/**
 * Adds an element to the end of an immutable List.
 *
 * @param {List} list - The immutable List to modify.
 * @param {string} element - The string to add to the List.
 * @returns {List} - The updated List with the new element added.
 */
export function addElementToList(list, element) {
  return list.push(element);
}

