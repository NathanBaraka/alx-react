// 2-nested.js

export default function accessImmutableObject(object, array) {
  return array.reduce((acc, key) => {
    // If acc becomes undefined or null at any point, return undefined
    if (acc && acc.hasOwnProperty(key)) {
      return acc[key];
    }
    return undefined;
  }, object);
}

