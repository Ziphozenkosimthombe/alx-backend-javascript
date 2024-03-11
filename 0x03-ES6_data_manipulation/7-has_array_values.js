export default function hasValuesFromArray(set, arr) {
  for (const arrays of arr) {
    if (!set.has(arrays)) return false;
  }
  return true;
}
