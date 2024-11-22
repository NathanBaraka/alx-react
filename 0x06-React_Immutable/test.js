import { getImmutableObject } from './0-fromjs';
import { Map } from 'immutable';  // Import the Map class

describe('getImmutableObject', () => {
  it('should convert a plain object to an Immutable Map', () => {
    const object = {
      fear: true,
      smell: -1033575916.9145899,
      wall: false,
      thing: -914767132
    };

    // Call the function and check if it returns an immutable Map
    const result = getImmutableObject(object);

    // Check if the result is an instance of Immutable.Map
    expect(result instanceof Map).toBe(true);  // Ensure it is a Map

    // Optionally, check the contents of the Map
    expect(result.get('fear')).toBe(true);
    expect(result.get('smell')).toBe(-1033575916.9145899);
    expect(result.get('wall')).toBe(false);
    expect(result.get('thing')).toBe(-914767132);
  });
});

