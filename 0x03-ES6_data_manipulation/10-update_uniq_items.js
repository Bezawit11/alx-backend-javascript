export default function updateUniqueItems(m) {
  for (let key of m.keys()) {
    if (m.get(key) === 1) {
      m.set(key, 100);
    }
  }
  return m;
}
