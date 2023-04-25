export default function updateUniqueItems(m) {
  if (Object.getPrototypeOf(map) !== Map.prototype) {
    throw Error('Cannot process');
  }
  for (let key of m.keys()) {
    if (m.get(key) === 1) {
      m.set(key, 100);
    }
  }
  return m;
}
