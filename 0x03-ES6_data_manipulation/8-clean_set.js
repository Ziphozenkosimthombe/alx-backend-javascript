/**
 *  function named cleanSet that returns a string of
 *  all the set values that start with a specific string (startString).
 * The function should take two arguments: the set and the startString.
 * When a value starts with startString you only append the rest of the string.
 * The string contains all the values of the set separated by -
 *
 */

function cleanSet(set, startString) {
  // check if startString is empty
  if (startString === '') {
    return '';
  }
  // check if set is empty
  let result = '';
  // iterate through the set
  set.forEach((value) => {
    // check if value starts with startString
    if (value.startsWith(startString)) {
      // append the rest of the string
      result += `${value.slice(startString.length)}-`;
    }
  });
  // return the result
  return result.slice(0, -1);
}

export default cleanSet;
