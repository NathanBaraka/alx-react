// 2-nested.js
export default function accessImmutableObject(object, array) {
  return array.reduce((acc, key) => {
    // Check if the accumulated value is defined and an object
    if (acc && typeof acc === 'object') {
      return acc[key]; // Return the next nested value
    }
    return undefined; // Return undefined if the key does not exist
  }, object);
}

