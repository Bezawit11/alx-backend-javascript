export default function appendToEachArrayValue(array, appendString) {
  for (let [idx, a] of array.entries()) {
    let value = a;
    array[idx] = appendString + value;
  }
  return array;
}
