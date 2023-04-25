export default function cleanSet(s, start) {
  let k = '';
  if (start === '') {
    return '';
  }
  for (let i of s) {
    if (i.startsWith(start) === true) {
      k += ''.concat(i.replace(start, ''), '-');
    }
  }
  return k.substring(0, k.length-1);;
}
