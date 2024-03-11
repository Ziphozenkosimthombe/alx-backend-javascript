/**
 * createInt8TypedArray -
 * returns a new ArrayBuffer with an Int8 value at a specific position.
 * accept three arguments: length (Number), position (Number), and value (Number).
 * If adding the value is not possible the error Position outside range should be thrown.
*/

export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the given length
  const buffer = new ArrayBuffer(length);
  // Create a new DataView with the given buffer
  const view = new DataView(buffer);
  // Check if the position is outside the range
  if (position > length) {
    throw new Error('Position outside range');
  }
  // Set the value at the given position
  view.setInt8(position, value);
  return view;
}
