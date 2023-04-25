export default function cleanSet(s, start) {
  let k = '';
  for (let i of s) {
    if (i.startsWith(start) === true) {
      s += ''.concat(i, '-');
    }
  }
  return s;
}
