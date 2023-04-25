export default function hasValuesFromArray(s, a) {
  const n = new Set(a);
  for (const i of n) {
    if (s.has(i) === false) {
      return false;
    }
  }
  return true;
}
