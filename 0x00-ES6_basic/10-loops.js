export default function appendToEachArrayValue(array, appendString) {
let i = 0;
for (let value of array) {
  array[i] = appendString + value;
  i = i + 1;
}
  return array;
}
